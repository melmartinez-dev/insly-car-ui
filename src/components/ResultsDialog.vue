<template>
    <q-dialog v-model="showDialog">
        <q-card dark>
            <q-card-section class="row items-center q-pa-none">
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup size="xs"/>
            </q-card-section>

            <q-card-section class="q-pa-sm">
                <results-table :data="data"/>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup lang="ts">
import { PolicyInstallmentsCalculation } from "../types/types";
import ResultsTable from "./ResultsTable.vue";

interface Props {
    showDialog: boolean;
    data: PolicyInstallmentsCalculation | undefined;
}
const props = defineProps<Props>();


</script>
