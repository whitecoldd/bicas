const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true },
    phone: {type: String, required: true, unique: true},
    nickname: {type: String, unique: true, required: false},
    birthday: {type: Date}
},
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);