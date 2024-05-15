const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    if (con) {
      // console.log("Database Connected...!");
    } else {
      // console.log("Database Not Connected");
    }
  } catch (error) {
    // console.log(error);
  }
};

module.exports = connectDB;
