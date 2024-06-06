const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'GRB', 
    password: 'joshuadun', 
    port: 5432, 
})

module.exports = pool;

const query = (text, params) => pool.query(text, params);

module.exports = { query, pool };
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to the database');
    release();

});