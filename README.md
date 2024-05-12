# Lecture Schedule App

This project is a web application for managing lecture schedules. It allows users to sign up, log in, schedule lectures, and manage course details.

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

    npm start: Starts the development server.
    npm run build: Builds the app for production.
    npm test: Launches the test runner.