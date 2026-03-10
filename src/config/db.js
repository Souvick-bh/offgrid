const mongoose = require("mongoose");

async function connectToMongo(mongoUri) {
  if (!mongoUri) {
    const err = new Error("Missing MONGODB_URI");
    err.status = 500;
    throw err;
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(mongoUri);
}

module.exports = { connectToMongo };

