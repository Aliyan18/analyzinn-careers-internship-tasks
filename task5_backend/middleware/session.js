const redis=require('redis');
const connectRedis=require('connect-redis');
const session=require('express-session')


const RedisStore= connectRedis(session)

const client=redis.createClient({
port:6379,
host:'localhost',
legacyMode:true,

});

client.connect().then(()=>{console.log('connected')})

const sessionMiddleware=session({
store:new RedisStore({client:client}),
secret:'aliyan key',
saveUninitialized:false,
resave:false,
cookie:{
  secure:false, //if true onl y send cookie over https
  httpOnly:true,// if true prevents client side js from reading the cookie
  maxAge:1000 * 60  //session max age in ms
}
});
client.on('error', (err) => {
    console.error('Redis client error:', err);
  });

module.exports=sessionMiddleware;