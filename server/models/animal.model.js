let animalList = require("../data");

class AnimalModel {
  constructor() {
    this.list = animalList;

    this.lastId = Math.max.apply(
      null,
      this.list.map((animal) => Number(animal.id))
    );
  }

  getNextId() {
    return ++this.lastId;
  }

  getAll() {
    return [...this.list];
  }

  add(animal) {
    const newAnimal = { ...animal, id: this.getNextId() };
    this.list = [...this.list, newAnimal];
    return newAnimal;
  }

  remove(id) {
    let deletedAnimal = {};
    this.list = this.list.filter((animal) => {
      if (animal.id === id) {
        deletedAnimal = animal;
        return false;
      }
      return true;
    });
    return deletedAnimal;
  }

  update(id, updatedAnimal) {
    this.list = this.list.map((animal) =>
      animal.id === id ? { ...updatedAnimal } : animal
    );
    return updatedAnimal;
  }
}

module.exports = new AnimalModel();
