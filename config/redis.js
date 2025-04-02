const redis = require("redis");
require('dotenv').config();
<<<<<<< HEAD
const redisClient = redis.createClient({  
=======
const redisClient = redis.createClient({
>>>>>>> b09cf328706a8789737302d2a9717dfa23ae708f
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  },
});

redisClient.connect();

module.exports = redisClient;