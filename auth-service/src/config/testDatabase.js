const pool = require("./database");

async function testConnection() {
    const [rows] = await pool.query ("SELECT 1");
    console.log("Database connected!", rows);
}

testConnection();