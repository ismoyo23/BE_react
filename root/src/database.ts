// import { Pool } from 'pg';

// export const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     password: 'ismoyo',
//     database: 'student',
//     port: 5432
// });


let mysql = require('mysql')

let config = require('./config/global')
 export let pool = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
})

