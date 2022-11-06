require('dotenv').config()

export default {
    port: 3000,
    db: process.env.DB_CONN_STR,
}