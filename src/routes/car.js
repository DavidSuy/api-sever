const express = require('express');
const { car } = require('../models');
const router = express.Router();

router.get('/', readCars);
router.get('/:id', readOneCars);
router.post('/', createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

async function readCars(req, res, next) {
  try {
    let response = await car.read();
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function readOneCars(req, res, next) {
  try {
    let id = req.params.id;
    let response = await car.read(id);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function createCar(req, res, next) {
  try {
    let newCar = req.body;
    let response = await car.create(newCar);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function updateCar(req, res, next) {
  try {
    let id = req.params.id;
    let newCar = req.body;
    let response = await car.update(id, newCar);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function deleteCar(req, res, next) {
  try {
    let id = req.params.id;
    let response = await car.delete(id);
    res.sendStatus(200).send(response);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
