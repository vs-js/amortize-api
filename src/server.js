const express = require('express');

require('dotenv').config({ path: '../.env' });

const app = express();

const PORT = process.env.PORT || 8080;

console.log('PORT:', process.env.PORT);

app.get('/', (req, res) => {
    res.send('Server for amortize api is running!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});