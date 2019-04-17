const express = require('express');
const router = express.Router();
const episodio = require('../controllers/episodio.controller.js');


router.get('/:claveEpisodio', episodio.getPersonajes);
router.post('/', episodio.postPersonaje);
router.delete('/:claveEpisodio/:personaje', episodio.deletePersonaje);


module.exports = router;