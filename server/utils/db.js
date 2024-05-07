const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = "mongodb+srv://vidhi123:vidhi123@cluster0.k5ltte3.mongodb.net/";
const URI = process.env.MONGODB_URI;  //FROM .ENV FILE  
// mongoose.connect(URI)


const connectDB = async ()  => {
    try {
        await mongoose.connect(URI);
        console.log("server connected");
    } catch (error) {
        console.error("connection fail");
        process.exit(0);
    }
}

module.exports = connectDB;