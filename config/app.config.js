require("dotenv").config;

const MONGO_DB_CONFIG = {
   DB: 'mongodb+srv://vanel:vanel@database.g2pacst.mongodb.net/database?retryWrites=true&w=majority'
    
}

module.exports = {
    MONGO_DB_CONFIG
}