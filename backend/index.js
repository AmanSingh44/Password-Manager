const express = require("express");
const dataRouter = require("./routers/data");
const cors = require("cors");

require("./db");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", dataRouter);

const PORT = 8888;

app.listen(PORT, () => {
  console.log(`Successfully listening at port ${PORT}`);
});
