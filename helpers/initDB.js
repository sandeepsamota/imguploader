import mongoose from "mongoose";

function initDB() {
  process.env.MONGO_URI = "mongodb://localhost:27017";
  if (mongoose.connections[0].readyState) {
    console.log("alredy connected");
    return;
  }
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error connecting", err);
  });
}

export default initDB;
