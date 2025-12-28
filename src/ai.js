import { AzureOpenAI } from "openai";

export async function generateContent(userPrompt) {
    // UPDATED: Your specific Azure details
    const endpoint = "https://krsna-mjo7rrmt-swedencentral.services.ai.azure.com/";
    const apiKey = "GE82kq3cLlsH9MqtiSwoETvegrOYNXoUjGhCyvLM4iYKb0NliTHPJQQJ99BLACfhMk5XJ3w3AAAAACOG9dyp"; 
    const apiVersion = "2024-05-01-preview";
    const deployment = "gpt-4o-mini"; 

    const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment , dangerouslyAllowBrowser: true});

    const result = await client.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: "You are the Bigticket Lottery Lucky Number Wizard. Your goal is to provide users with 6-7 lucky numbers for their lottery tickets based on their prompts. Be encouraging and fun, but remind them that these are generated for entertainment purposes." 
            },
            { role: "user", content: userPrompt }
        ],  
    });  

    return result;
}