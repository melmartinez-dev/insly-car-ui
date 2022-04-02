<template>
  <div id="q-app">
    <q-layout>
      <q-page-container>
        <q-page padding class="bg-grey-10 row justify-center items-center">
          <calculator-card @show-dialog="handleShowDialog" />
        </q-page>
      </q-page-container>
      <results-dialog :show-dialog="showDialog" :data="policyInstallmentsCalculationData" />
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CalculatorCard from './components/CalculatorCard.vue';
import ResultsDialog from './components/ResultsDialog.vue';
import { PolicyInstallmentsCalculation } from './types/types';
export default defineComponent({
  components: { CalculatorCard, ResultsDialog },
  setup() {
    const policyInstallmentsCalculationData = ref<PolicyInstallmentsCalculation>();
    const showDialog = ref(false);
    const handleShowDialog = (data: PolicyInstallmentsCalculation) => {
      policyInstallmentsCalculationData.value = data;
      showDialog.value = true;
    }
    return {
      policyInstallmentsCalculationData,
      showDialog,
      handleShowDialog
    }
  }
})
</script>
