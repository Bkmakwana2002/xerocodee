const redis = require('redis');

// connect to redis
const redis_client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

// redis_client.on('connect', function () {
//     console.log('redis client connected');
// });

const func = async () => {
    redis_client.on('connect', function () {
        console.log('redis client connected');
    });
    await redis_client.connect();
}

func()


module.exports = redis_client;