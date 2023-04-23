const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewURlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connection is succs");
    })
    .catch((error) => {
    //   console.log(error);

      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
