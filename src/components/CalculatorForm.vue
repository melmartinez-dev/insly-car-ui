<template>
    <q-form @submit.prevent="onSubmit">
        <q-input
            class="q-my-md"
            label="Estimated Car value"
            dense
            v-model.number="carValue"
            dark
            outlined
            suffix="€"
            mask="######"
            :rules="[input => input >= 100 && input <= 100000 || 'Must be between 100€ and 100000€']"
        ></q-input>
        <q-input
            class="q-my-md"
            label="Tax Percentage"
            dense
            v-model.number="taxPercentage"
            dark
            outlined
            suffix="%"
            mask="###"
            :rules="[input => input >= 0 && input <= 100 || 'Must be between 1% and 100%']"
        ></q-input>
        <q-input
            class="q-my-md"
            label="Policy Installments"
            dense
            v-model.number="policyInstallments"
            dark
            outlined
            mask="##"
            :rules="[input => input >= 1 && input <= 12 || 'Must be between 1 and 12']"
        ></q-input>
        <div class="row justify-center q-my-md">
            <q-btn
                label="Calculate"
                type="submit"
                color="primary"
                icon="calculate"
                no-caps
                :loading="loading"
            >
                <template #loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
        </div>
    </q-form>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue'
import apiService from "../services/api-service"
import { PolicyInstallmentsCalculation } from '../types/types';

const $q = useQuasar();
const emit = defineEmits<{
    (e: "show-dialog", data: PolicyInstallmentsCalculation): void
}>();
const carValue = ref(100);
const taxPercentage = ref(10);
const policyInstallments = ref(2);
const loading = ref(false);

const onSubmit = () => {
    loading.value = true;
    apiService.calculatePolicyInstallments({
        carValue: carValue.value,
        taxPercentage: taxPercentage.value,
        policyInstallments: policyInstallments.value,
        userTime: new Date().toISOString()
    }).then(response => {
        emit("show-dialog", response.data);
    }).catch(() => {
        $q.notify({
            color: "negative",
            message: "An error ocurrend when calling API",
            position: "top-right",
            icon: "report_problem"
        });
    })
        .finally(() => { loading.value = false })
}

</script>
