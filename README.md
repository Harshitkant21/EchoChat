# Echochat

Echochat is a chat application that includes a React frontend and a Node.js backend. This project allows users to connect, chat, and collaborate with ease using real-time communication features.

## Table of Contents

- [Overview](#overview)
- [Client](#client)
  - [Setup](#client-setup)
  - [Scripts](#client-scripts)
- [Server](#server)
  - [Setup](#server-setup)
  - [Scripts](#server-scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Overview

Echochat provides a modern and intuitive user interface for real-time messaging. The frontend is built with React and TailwindCSS, while the backend uses Express.js and Socket.IO to handle messaging and user management.

## Client

The client-side of Echochat is built with React and styled using TailwindCSS. It handles the user interface and communicates with the backend via HTTP requests and WebSocket connections.

### Client Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/harshitkant21/echochat.git
    cd echochat/client
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The client-side application will be available at [http://localhost:3000](http://localhost:3000).

### Client Scripts

- `start`: Starts the development server.
- `build`: Builds the application for production.
- `test`: Runs the tests.
- `eject`: Ejects the configuration (if you need to customize the build setup).

## Server

The server-side of Echochat is built with Node.js and Express. It handles API requests, manages user authentication, and facilitates real-time communication using Socket.IO.

### Server Setup

1. **Navigate to the server directory:**

    ```bash
    cd echochat/server
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root of the `server` directory with the necessary environment variables:**

    ```env
    PORT=8080
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the server:**

    ```bash
    npm run dev
    ```

    The server-side application will be available at [http://localhost:8080](http://localhost:8080).

### Server Scripts

- `dev`: Starts the server with `nodemon` for development.
- `test`: Placeholder for running tests (currently not specified).

## Dependencies

### Client

- `@reduxjs/toolkit`: For state management.
- `axios`: For HTTP requests.
- `lodash.debounce`: Utility for debouncing.
- `react-hot-toast`: For notifications.
- `react-icons`: Icon library.
- `react-router-dom`: For routing.
- `tailwind-scrollbar`: For custom scrollbar styling.
- `web-vitals`: For measuring performance.

### Server

- `bcryptjs`: For password hashing.
- `cookie-parser`: For parsing cookies.
- `cors`: For enabling CORS.
- `dotenv`: For managing environment variables.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: For handling JWT authentication.
- `mongoose`: For MongoDB object modeling.
- `nodemon`: For automatically restarting the server.
- `socket.io`: For real-time communication.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a feature branch:**

    ```bash
    git checkout -b feature-branch
    ```

3. **Commit your changes:**

    ```bash
    git commit -am 'Add new feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature-branch
    ```

5. **Create a new Pull Request.**


