const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "instructor", // admin
  },
  // course: {
  // 	type: Schema.Types.ObjectId,
  // 	ref: "Course",
  // },
  courses: [
    {
      name: {
        type: String,
      },
      date: {
        type: String,
      },
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
