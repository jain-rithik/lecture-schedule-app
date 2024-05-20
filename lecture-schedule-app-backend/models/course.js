const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    filename: String,
},
  lectures: Array,
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
