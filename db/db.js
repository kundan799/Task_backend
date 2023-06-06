const mongoose = require("mongoose");

const DBconnect = () => {
  mongoose
    .connect(process.env.Mongourl)
    .then(() => console.log("database connected"))
    .catch(()=>console.log("database disconnected"))
};

module.exports=DBconnect;
