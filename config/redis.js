const redis = require("redis");
require('dotenv').config();
const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  },
});

redisClient.connect();

module.exports = redisClient;