<template>
    <q-card class="my-card" dark>
        <q-card-section horizontal>
            <q-img src="https://i.imgur.com/dwkoiHi.jpeg" class="col-6" height="500px" />
            <q-card-section class="col-6">
                <p class="text-h6">Car Insurance Calculator</p>
                <div class="q-py-lg">
                    <calculator-form @show-dialog="handleShowDialog"></calculator-form>
                </div>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { PolicyInstallmentsCalculation } from '../types/types';
import CalculatorForm from './CalculatorForm.vue'
const emit = defineEmits<{
    (e: "show-dialog", data: PolicyInstallmentsCalculation): void
}>();
const handleShowDialog = (data: PolicyInstallmentsCalculation) => {
    emit('show-dialog', data);
}
</script>


<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 600px
</style>