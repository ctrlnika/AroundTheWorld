// backend/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/route', async (req, res) => {
    const { start, end } = req.query;
    try {
        const response = await axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${start}/to/${end}`, {
            params: {
                app_key: 'your_tfl_api_key', // Replace with your API key
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
