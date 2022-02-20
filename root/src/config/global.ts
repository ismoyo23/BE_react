let config = {
    mysql : {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.PORT
    },
    jwtSecretKey: process.env.JWT_SECRET
}

module.exports = config;