import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { PolicyInstallmentsCalculation, PolicyInstallmentsCalculationInput } from '../types/types';

class ApiService {
    private axiosInstance: AxiosInstance;
    constructor(base_url: string) {
        const requestConfig: AxiosRequestConfig = { baseURL: base_url };
        this.axiosInstance = axios.create(requestConfig);
    }
    calculatePolicyInstallments(data: PolicyInstallmentsCalculationInput) {
        return this.axiosInstance.post<PolicyInstallmentsCalculation>("/calculate", data);
    }
}

export default Object.freeze(new ApiService(import.meta.env.VITE_BACKEND_URL))