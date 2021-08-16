const express = require("express");
const router = express.Router();

const {
  getAll,
  add,
  update,
  remove,
} = require("../controllers/animal.controller");

router.get("/", getAll);
router.post("/", add);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
