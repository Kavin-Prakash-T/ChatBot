export const getRandomResponse=() => {
    const responses = [
        "I'm here to help!",
        "Can you please provide more details?",
        "That's interesting!",
        "Let me think about that.",
        "Could you clarify your question?"
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}