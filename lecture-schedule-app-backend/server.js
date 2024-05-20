const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const Course = require("./models/course");
const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const { wrapasync } = require("./wrapasync");
const {storage} = require("./cloudConfig.js");
const multer = require("multer");
const upload = multer({ storage })

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const mongoDbUrl = process.env.MONGODB_URL;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDbUrl);
}

// user route ----------------------------------------------------------------
app.post(
  "/api/user/signup",upload.single('image'),
  wrapasync(async (req, res) => {
    try {
      console.log("post check");
      console.log(req.body); // Log the received data
      console.log(req.file); // Log the received file

      const { name, username, email, password } = req.body;
      const image = { url: req.file.path, filename: req.file.filename };
      const newUser = new User({ name, email, username, image });
      const registeredUser = await User.register(newUser, password);
      console.log("Registered user", registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        res.json({ success: registeredUser });
      });
    } catch (e) {
      res.json({ error: e.message });
    }
  })
);

app.post(
  "/api/user/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  function (req, res) {
	console.log("Login successful")
    // console.log("Login user", req.user);
    res.json({ success: req.user._id });
  }
);

app.get("/api/user/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      res.json({ error: err.message });
      return console.log(err.message);
    }
    res.json({ success: true });
  });
});

app.get(
  "/api/users",
  wrapasync(async (req, res) => {
    const allUsers = await User.find();
    res.json({ success: allUsers });
  })
);

app.get(
  "/api/user/:id",
  wrapasync(async (req, res) => {
    const allUsers = await User.findById(req.params.id);
   
    res.json({ success: allUsers });
  })
);

app.put(
  "/api/instructor/:id",
  wrapasync(async (req, res) => {
    const allUsers = await User.findById(req.params.id);
    const existingCourseOnDate = allUsers.courses.find(
      (course) => course.date === req.body.date
    );
    if (existingCourseOnDate) {
      return res
        .status(400)
        .json({ error: "User already has a course assigned on this date" });
    }
	
    allUsers.courses.push({ name: req.body.course, date: req.body.date });
    const addedcourse = await allUsers.save();
    
    res.json({ success: "allUsers" });
  })
);

// course routes ----------------------------------------------------------------
app.get(
  "/api/course",
  wrapasync(async (req, res) => {
    const allCourses = await Course.find();
    res.json({ success: allCourses });
  })
);
app.post(
  "/api/course", upload.single('image'),
  wrapasync(async (req, res) => {
    const image = { url: req.file.path, filename: req.file.filename };
    const newCourse = new Course({
      name: req.body.name,
      level: req.body.level,
      description: req.body.description,
      image: image
    });
    const course = await newCourse.save();
  
    res.json({ success: course });
  })
);

app.put(
  "/api/course/:id",
  wrapasync(async (req, res) => {
    const updateCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ success: updateCourse });
  })
);

app.delete(
  "/api/course/:id",
  wrapasync(async (req, res) => {
    const deletCourse = await Course.findByIdAndDelete(req.params.id);
    res.json({ success: deletCourse });
  })
);

// ----------------------------------------------------------------

app.use("*", (req, res) => {
  res.json({ error: "Invalid route" });
});
app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
