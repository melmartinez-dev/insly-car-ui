export interface Payment {
    basePrice: number,
    commission: number,
    tax: number,
    total: number,
}

export interface PolicyInstallmentsCalculation {
    policyPercentage: number,
    taxPercentage: number,
    carValue: number,
    policy: Payment,
    installments: Payment[]
}

export interface PolicyInstallmentsCalculationInput {
    carValue: number,
    taxPercentage: number,
    policyInstallments: number,
    userTime: string
}
