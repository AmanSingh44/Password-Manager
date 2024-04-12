const express = require("express");
const {
  createData,
  getData,
  editData,
  deleteData,
  getSingleData,
} = require("../controllers/data");
const router = express.Router();

router.post("/create", createData);
router.get("/get", getData);
router.get("/getOne/:id", getSingleData);

router.put("/edit/:id", editData);
router.delete("/delete/:id", deleteData);

module.exports = router;
