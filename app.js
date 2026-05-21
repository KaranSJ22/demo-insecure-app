const express = require('express');
const { Pool } = require('pg');
const _ = require('lodash');

const app = express();
const port = 3000;

// Connect to the database using the injected environment variable
const pool = new Pool({
    connectionString: process.env.DB_URL
});

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Insecure App Running! DB Time: ${result.rows[0].now}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database connection failed');
    }
});

app.listen(port, () => {
    console.log(`Insecure app listening at http://localhost:${port}`);
});