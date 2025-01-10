#Two-Tier Web Application with Docker
-Overview-
This project demonstrates how to "containerize a two-tier web application" using Docker. This is a simple web application that consists of two main components:
1. Frontend (a web server, typically using Node.js)
2. Backend (a database or other service, such as npm)

The application is packaged into Docker containers to ensure consistency across environments and to make it easily deployable on any platform supporting Docker.



#Technologies Used
- Docker: Used for creating containers that package the web application and its dependencies.
- Node.js: The backend web server running in the container.
- Express: A web framework for Node.js used to serve HTTP requests.
- npm: The package manager for managing dependencies.
  


#Features
- Dockerized Frontend: A simple Node.js web server running inside a Docker container.
- Multi-Stage Dockerfile: Optimized Dockerfile that defines build and runtime environments for the app.
- Port Mapping: Exposes the application on port `3000` to be accessed through the browser.



#Project Setup
To get this project running locally, follow these steps.
-Prerequisites-
A) Docker: Make sure Docker is installed on your system. You can follow the [official Docker installation guide](https://docs.docker.com/get-docker/) for your operating 
           system.
B) Git: Git is required to clone the repository.


