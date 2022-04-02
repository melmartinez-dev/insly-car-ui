<template>
    <q-markup-table flat bordered dark>
        <thead>
            <tr>
                <th v-for="header in headers" class="text-left">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="cell in valueArray">{{ cell }}</td>
            </tr>
            <tr v-for="row in formattedDataWithHeaders">
                <td v-for="(cell, index) in row" :class="{ 'text-right': index > 0 }">{{ cell }}</td>
            </tr>
        </tbody>
    </q-markup-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Payment, PolicyInstallmentsCalculation } from '../types/types';
import concat from "lodash/concat";
import map from "lodash/fp/map"
import unzip from "lodash/fp/unzip";
import pipe from "lodash/fp/pipe";
import fill from "lodash/fp/fill";

interface Props {
    data: PolicyInstallmentsCalculation | undefined;
}
const props = defineProps<Props>();
//Define table headers
const headers = computed<string[]>(() => concat(
    ["", "Policy"],
    map.convert({ cap: false })((value: string, index: number) => `${index + 1} installment`)(props.data?.installments))
);
//Define total value row
const valueArray = computed<string[]>(() => fill(2, headers.value.length, "")(["Value", props.data?.carValue.toFixed(2), ...Array(headers.value.length - 2)]));
//Left side column (this is static)
const leftHeaders = computed(() => [`Base Price (${props.data?.policyPercentage}%)`, "Commission (17%)", `Tax (${props.data?.taxPercentage}%)`, "Total Cost"]);
//Method to transform every payment into an ordered array
const extractPaymentFields = (payment: Payment) => {
    const { basePrice, commission, tax, total } = payment;
    return map((value:number)=> value.toFixed(2))([basePrice, commission, tax, total]);
}
//Append left column to resulting array
const addLeftHeaders = (data: string[], index: number) => [leftHeaders.value[index], ...data];
//Transforms array of payments into an unzipped array and adds the left column
const formatDataWithHeaders: (payments: Payment[]) => string[] = pipe(
    map(extractPaymentFields),
    unzip,
    map.convert({ cap: false })(addLeftHeaders)
);
//Resulting array as a computed property
const formattedDataWithHeaders = computed(() => formatDataWithHeaders(
    concat(props.data?.policy as Payment, props.data?.installments as Payment[]))
);
</script>