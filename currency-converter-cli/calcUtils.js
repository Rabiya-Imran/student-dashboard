import {fetchExchangeRate} from "./apiService.js";
export function convertCurrency(amount, rate){
    const result = amount * rate;
    return result.toFixed(2);
}