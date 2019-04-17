var redis = require('redis');
var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');


module.exports = redisClient;
app.listen(3000);
app.use(bodyParser.json());
console.log('Corriendo server');

app.use(cors({origin: 'http://localhost:4200'}));


var redisClient = redis.createClient(6379, 'redis');

//ROUTER
// app.use('/episodios', require('./routes/episodios.routes'));
app.use('/episodio', require('./routes/episodio.routes'));

redisClient.on('connect', function() {
    console.log('Conectado a Redis Server');

});

redisClient.on('error', function(err){
    console.log('Error: '+ err);
});



// redisClient.LPUSH('I', 'Lucas Areguati', 'Mateo Rogatky', 'Manuel Ginobili');
// redisClient.LRANGE('I', 0, -1, (err, value) => {
 // console.log(value);
// });

app.get('/', (req, res)=> {
    res.send('HOLA');
    
    // redisClient.get('1', (err, value)=> {
      // res.send(value);
    //});
    //redisClient.LRANGE('nombres', 0, -1, function(err, value){
     //  res.send('Hola');
    // });
});