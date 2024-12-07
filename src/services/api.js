const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota principal para interagir com o ChatGPT
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Mensagem é obrigatória' });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4', // ou 'gpt-3.5-turbo'
                messages: [{ role: 'user', content: message }],
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        const reply = response.data.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        console.error('Erro ao se comunicar com a OpenAI API:', error.message);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
