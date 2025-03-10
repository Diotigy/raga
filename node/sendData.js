async function logData(title, language) {
    const request = new Request("http://localhost:5001/api/send-info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            title: title, 
            language: language, 
        }),
    });

    try {
        const response = await fetch(request);
        console.log("Status:", response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
