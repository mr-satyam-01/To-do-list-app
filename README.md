# To-do-list-app
specifically practicing how to make backends
This is the backend server for the Todo application, built using Node.js and Express.

Running the Server

To start the server, run:
node index1.js
The server will listen on port 3000.

Using Nodemon

Nodemon is a utility that automatically restarts the server whenever file changes in the directory are detected. This helps during development to avoid manually restarting the server.

Installation

You can install nodemon globally using npm:
npm install -g nodemon

Usage
To start the server with nodemon, run:
nodemon index1.js
Now, the server will automatically restart whenever you make changes to the source files.

Dependencies

The project uses the following dependencies:
	•	express: Web framework for Node.js.
	•	body-parser: Middleware to parse incoming request bodies.
	•	uuid: Library to generate unique IDs.
	•	cors: Middleware to enable Cross-Origin Resource Sharing.
	•	nodemon: Utility to automatically restart the server during development (optional).

