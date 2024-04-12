import axios from "axios";

const URL = "http://localhost:8888";

export const addData = async (data) => {
  try {
    return await axios.post(`${URL}/create`, data);
  } catch (err) {
    console.log("Error while calling add user api", err);
  }
};
export const getData = async () => {
  try {
    return await axios.get(`${URL}/get`);
  } catch (err) {
    console.log("Error while calling add user api", err);
  }
};
export const getOneData = async (id) => {
  try {
    return await axios.get(`${URL}/getOne/${id}`);
  } catch (err) {
    console.log("Error while calling add user api", err);
  }
};
export const editData = async (data, id) => {
  try {
    return await axios.put(`${URL}/edit/${id}`, data);
  } catch (err) {
    console.log("Error while calling add user api", err);
  }
};
export const deleteData = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (err) {
    console.log("Error while calling add user api", err);
  }
};
