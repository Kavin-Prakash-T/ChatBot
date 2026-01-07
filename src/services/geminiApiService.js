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
        if (response.status === 429) {
            const data = await response.json();
            const retryDelay =
                data?.error?.details?.find(d => d["@type"]?.includes("RetryInfo"))
                    ?.retryDelay || "a few seconds";

            return {
                error: "RATE_LIMIT",
                retryDelay,
            };
        }

        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Gemini API error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        return data.candidates[0].content.parts[0].text
    }
    catch (error) {
        throw error
    }
}