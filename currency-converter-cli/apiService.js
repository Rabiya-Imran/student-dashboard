// apiService.js

export async function fetchExchangeRate(targetCurrency) {
    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        
        // 1. Check if the server response failed (e.g., 404, 403, 500 status codes)
        if (!response.ok) {
            const errorText = await response.text(); // Read the raw error message safely
            throw new Error(`Server returned HTTP ${response.status}: ${errorText.substring(0, 100)}`);
        }

        // 2. Double check if the server actually sent back JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const rawBody = await response.text();
            throw new Error(`Expected JSON but received HTML/Text! Raw snippet: ${rawBody.substring(0, 100)}`);
        }

        // 3. If safe, parse the data
        const data = await response.json();
        
        const liveRate = data.rates[targetCurrency.toUpperCase()];
        return liveRate;
        
    } catch (error) {
        console.error("Error fetching exchange rate:", error.message);
        throw error; 
    }
}
