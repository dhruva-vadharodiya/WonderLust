const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("connected to DB");

})
.catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//    await Listing.deleteMany({});
//    initData.data = initData.data.map((obj) => ({...obj, owner: "65ead027232fd574fa2c1373"}));
//    await Listing.insertMany(initData.data);
//    console.log("data was initialized ");

// };
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: "65ead027232fd574fa2c1373",
      geometry: { type: "Point", coordinates: [0, 0] } // Add geometry.type here
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized ");
 
 };

initDB();