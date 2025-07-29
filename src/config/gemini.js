const apiKey = "AIzaSyAr9fK_us9R81QNwyiXkUKMCzk2531jCQk"

import { GoogleGenAI } from '@google/genai';

async function main() {
    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    const tools = [
        {
            googleSearch: {}
        },
    ];

    const config = {
        thinkingConfig: {
            thinkingBudget: -1,
        },
        tools,
    };

    const model = 'gemini-2.5-pro';

    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: 'INSERT_INPUT_HERE',
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    for await (const chunk of response) {
        console.log(chunk.text);
    }
}

export default main();
