// Groq AI Integration (FREE & FAST!)

const GROQ_API_KEY = 'gsk_0PXo173v9C5elB7Ap2RIWGdyb3FYHadDoevX0Z25e9jq8LhG3wFFA';
async function getAIResponse(userMessage) {
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [{
                    role: 'system',
                    content: 'You are SmartInvest AI, helping young Kenyans learn about investing in MMFs and NSE stocks. Be concise, friendly, practical. Focus on Kenyan context.'
                }, {
                    role: 'user',
                    content: userMessage
                }],
                max_tokens: 300
            })
        });

        if (!response.ok) throw new Error('API failed');

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error('Error:', error);
        return "I'm having connection issues. Try asking about MMFs, stocks, or how to start investing!";
    }
}

function shouldUseAI() {
    return GROQ_API_KEY && GROQ_API_KEY !== 'PASTE_YOUR_GROQ_KEY_HERE' && GROQ_API_KEY.startsWith('gsk_');
}