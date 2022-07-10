const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    status:Number,      // 0 normal, 1 vip, -1 banned
    registerDate:Date
});
module.exports = mongoose.model("User", userSchema);