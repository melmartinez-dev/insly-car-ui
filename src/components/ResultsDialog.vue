<template>
    <q-dialog v-model="show">
        <q-card dark>
            <q-card-section class="row items-center q-pa-none">
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup size="xs" />
            </q-card-section>

            <q-card-section class="q-pa-sm">
                <results-table :data="data" />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { PolicyInstallmentsCalculation } from "../types/types";
import ResultsTable from "./ResultsTable.vue";

interface Props {
    showDialog: boolean;
    data: PolicyInstallmentsCalculation | undefined;
}
const emit = defineEmits<{
    (e: "close-dialog"): void
}>();
const props = defineProps<Props>();
const show = computed<boolean>({
    get() {
        return props.showDialog;
    },
    set(value: boolean) {
        if (!value)
            emit('close-dialog');
    }
})
</script>
