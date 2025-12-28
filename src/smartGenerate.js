import * as React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { generateContent } from './ai';

export default function SmartAi() {
    const [userPrompt, setUserPrompt] = useState("");
    const [aiGeneratedContent, setAiGeneratedContent] = useState("Your lucky numbers will appear here!");

    const generateAiMagic = () => {
        setAiGeneratedContent("Consulting the stars for your numbers...");
        generateContent(userPrompt).then(res => {
            setAiGeneratedContent(res.choices[0].message.content);
            setUserPrompt("");
        }).catch(err => {
            console.error(err);
            setAiGeneratedContent("Oops! The crystal ball is foggy. Try again.");
        });
    }

    return (
        <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Welcome to Lucky Number Chooser
            </Typography>
            <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                Tell the AI a bit about yourself or just ask for your Bigticket numbers!
            </Typography>

            <TextField 
                label="Ask for your lucky numbers..." 
                variant="outlined" 
                fullWidth 
                onChange={(e) => setUserPrompt(e.target.value)} 
                value={userPrompt}
            />
            <Button 
                sx={{ mt: 2 }} 
                variant="contained" 
                onClick={generateAiMagic}
            >
                Generate Lucky Numbers
            </Button>

            <Typography sx={{ mt: 4, fontWeight: 'bold' }}>
                {aiGeneratedContent}
            </Typography>
        </Box>
    );
}