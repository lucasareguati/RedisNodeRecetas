// var redisClient = require('../app/redisClient');
var redis = require('redis');


var redisClient = redis.createClient(6379, 'redis');


const episodioCtrl = {};


episodioCtrl.getPersonajes = async(req, res) => {
    console.log(req.params);
    redisClient.LRANGE(req.params.claveEpisodio, 0, -1, (err, value)=> {
        res.send(value);
    }); 
} 


// json: episodio y personaje

episodioCtrl.postPersonaje = async(req, res) => {
    console.log(req.body.personaje);
    redisClient.LPUSH(req.body.episodio, req.body.personaje, ()=> {
      console.log('Guardado correctamente: ' + req.body.personaje);
    });
}

episodioCtrl.deletePersonaje = async(req, res ) => {
    redisClient.LREM(req.params.claveEpisodio, 1, req.params.personaje);
    console.log('Personaje eliminado corrrectamente')

}


module.exports = episodioCtrl;