const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./models/db");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoute = require("./routers/authUsers");
const postRoute = require("./routers/postRoute");

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.send(`<h1>server is running on ${PORT}</h1>`);
});

app.use("/auth", authRoute);
app.use("/postapp", postRoute);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
