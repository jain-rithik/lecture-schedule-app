# Lecture Schedule App

This project is a web application for managing lecture schedules. It allows users to sign up, log in, schedule lectures, and manage course details.

# Admin Login Details
- username: admin
- password: admin123

## Features

- **User Authentication:** Users can sign up, log in, and log out securely.
- **Course Management:** Users can add, edit, delete, and view course details.
- **Lecture Scheduling:** Instructors can schedule lectures for specific dates.
- **Error Handling:** Comprehensive error handling for user interactions and server requests.

## Technologies Used

- **Frontend:** React, React Router, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Testing:** Jest, React Testing Library

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

2. **Install dependencies:**

    ```bash
    Copy code
    cd lecture-schedule-app
    npm install
    Set up environment variables:

3. **Create a .env file in the root directory and add the following variables:**

    plaintext
    Copy code
    MONGODB_URL=<your-mongodb-url>
    SECRET=<your-secret-key>
    Start the development server:

    ```bash
    Copy code
    npm start
    Available Scripts
    In the project directory, you can run:

- **npm start:** Starts the development server.
- **npm run build:** Builds the app for production.

### Routes

- **User Routes:**
  - POST /api/user/signup: Register a new user.
  - POST /api/user/login: Log in a user.
  - GET /api/user/logout: Log out a user.
  - GET /api/users: Get all users.
  - GET /api/user/:id: Get a specific user by ID.

- **Instructor Routes:**
  - PUT /api/instructor/:id: Add a course for an instructor. (Ensure user is logged in as an instructor)
  
- **Course Routes:**
  - GET /api/course: Get all courses.
  - POST /api/course: Create a new course.
  - PUT /api/course/:id: Update a course by ID.
  - DELETE /api/course/:id: Delete a course by ID.
