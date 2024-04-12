const Data = require("../model/data");
const { isValidObjectId } = require("mongoose");
const mongoose = require("mongoose");

const getData = async (req, res) => {
  const data = await Data.find();
  res.status(200).json({ data });
};

const createData = async (req, res) => {
  const { website, username, password } = req.body;

  const newData = new Data({ website, username, password });
  try {
    await newData.save();
    res.status(200).json({
      id: website._id,
      website,
      username,
      password,
    });
  } catch (err) {
    res.status(500).json({ error: "Error adding data", message: err.message });
  }
};

const getSingleData = async (req, res) => {
  const id = req.params.id;

  const data = await Data.findById(id);
  res.status(200).json({ data });
};

const editData = async (req, res) => {
  const data = req.body;
  const websiteId = req.params.id;
  try {
    await Data.findByIdAndUpdate(websiteId, {
      website: data.website,
      usernme: data.username,
      password: data.password,
    });
    res.status(200).json({ message: "Data edited successfully", data: data });
  } catch (err) {
    res.status(500).json({ error: "Error editing data", message: err.message });
  }
};

const deleteData = async (req, res) => {
  const websiteId = req.params.id;
  let data;
  try {
    data = await Data.findByIdAndDelete(websiteId);

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error deleting data", message: err.message });
  }
};

module.exports = { createData, getData, editData, deleteData, getSingleData };
