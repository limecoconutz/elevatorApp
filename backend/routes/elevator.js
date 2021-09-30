const express = require('express');
const router = express.Router();
const elevatorsController = require('../controllers/elevatorsController.js');
const elevators = require('../db_mock/elevators.json');
const findElevatorByID = id => elevators.find(el => el.id === id);
router.get('/', elevatorsController.getElevators);
router.get('/:id', elevatorsController.getElevatorById);
router.patch('/:id/moveup', elevatorsController.moveElevatorUp);
router.patch('/:id/movedown', elevatorsController.moveElevatorDown);
router.patch('/:id', elevatorsController.moveElevator);
// router.get('/floor/:floor', elevatorsController.getElevatorsByFloor);
// router.get('/status/:status', elevatorsController.getElevatorsByStatus);

module.exports = router;