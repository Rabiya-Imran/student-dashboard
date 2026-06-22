// dogTest.js

async function getDogFact() {
  try {
    console.log("📡 Fetching raw data stream...");
    
    // This server strictly sends back machine-readable data arrays
    const response = await fetch("https://kinduff.com");
    
    const data = await response.json();
    
    console.log("--------------------------------------------------");
    // Accessing the 'facts' array inside the downloaded object
    console.log("🐾 Random Dog Fact:", data.facts[0]);
    console.log("--------------------------------------------------");

  } catch (error) {
    console.log("Error processing request: " + error);
  }
}

getDogFact();

