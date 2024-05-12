let express = require('express');
let router = express.Router();

let moviesController = require('../controllers/moviesController')

//Aquí las rutas
router.get('/', moviesController.index);
router.get('/detail/:id', moviesController.show);
router.get('/new', moviesController.create);
router.get('/recommended', moviesController.recommended);
router.post('/create', moviesController.store);
router.get('/results', moviesController.search);




module.exports = router;