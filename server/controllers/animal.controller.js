const AnimalModel = require("../models/animal.model");

// GET /animals
const getAll = (req, res) => {
  res.status(200).json(AnimalModel.getAll());
};

// POST /animals
const add = (req, res) => {
  const newAnimal = req.body;
  res.status(201).json(AnimalModel.add(newAnimal));
};

// PUT /animals/:id
const update = (req, res) => {
  const id = Number(req.params.id);
  const updatedAnimal = req.body;
  res.status(200).json(AnimalModel.update(id, updatedAnimal));
};

// DELETE /animals/:id
const remove = (req, res) => {
  const id = Number(req.params.id);
  res.status(200).json(AnimalModel.remove(id));
};

module.exports = {
  getAll,
  add,
  update,
  remove,
};
