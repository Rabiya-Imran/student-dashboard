// app.js
import { fetchExchangeRate } from './apiService.js';
import { convertCurrency } from './calcUtils.js';

// 1. Grab references to the HTML components
const amountInput = document.getElementById('amountInput');
const targetSelect = document.getElementById('targetCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// 2. Wraping application pipeline inside a button click event listener
convertBtn.addEventListener('click', async () => {
    try {
        // UI Visual Feedback: Show a loading message
        resultDiv.style.display = "block";
        resultDiv.style.color = "#333";
        resultDiv.innerHTML = "Fetching live rates...";

        // Extract values typed by the user in the UI fields
        const amount = Number(amountInput.value);
        const target = targetSelect.value;

        // Validation safety check
        if (!amount || amount <= 0) {
            resultDiv.style.color = "red";
            resultDiv.innerHTML = "Please enter a valid amount.";
            return;
        }

        // Execute the modular async processing pipeline
        const rate = await fetchExchangeRate(target);
        const finalAmount = convertCurrency(amount, rate);

        // Render the results into the UI element
        resultDiv.style.color = "green";
        resultDiv.innerHTML = `
            <div>$${amount} USD =</div>
            <div style="font-size: 24px; margin: 5px 0;">${finalAmount} ${target}</div>
            <div style="font-size: 12px; color: #777;">Live Rate: 1 USD = ${rate}</div>
        `;

    } catch (error) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "Connection failed. Try again.";
    }
});
