const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_API_URL = `${import.meta.env.VITE_GEMINI_API_URL}${GEMINI_API_KEY}`

export const fetchGeminiResponse = async (prompt) => {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "contents": [
                    {
                        "parts": [
                            { "text": prompt }
                        ]
                    }
                ]
            })
        })
        if (!response.ok) {
            const errorText = await response.text()
            console.log("Error response from GEMINI API: ", errorText)
            throw new Error(`Gemini API error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        return data.candidates[0].content.parts[0].text
    }
    catch (error) {
        console.error("Error fetching Gemini response:", error)
        throw error
    }
}