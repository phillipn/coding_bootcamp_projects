var express = require('express');
var router = express.Router();
var controller = require('../controllers/animals.js');

router.get('/', controller.animals);
router.get('/animals/new', controller.animalNew);
router.get('/animals/:id', controller.animal);
router.post('/animals', controller.animalCreate);
router.get('/animals/edit/:id', controller.animalEdit);
router.post('/animals/delete/:id', controller.animalDelete);
router.post('/animals/:id', controller.animalUpdate);

module.exports = router;
