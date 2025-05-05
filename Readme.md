# 📦 nodejs-docker-web-app

> A modern Node.js app from 
https://youtu.be/nH47lsxvY9c
https://youtu.be/3qau30Waeyc
https://www.youtube.com/watch?v=niw5KSO94YI

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Express](https://img.shields.io/badge/Express.js-lightgrey)
![Docker](https://img.shields.io/badge/docker-enabled-blue)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 Features

- RESTful API built with Express.js
- Containerized with Docker
- Environment-based configuration with `.env`
- Scalable project structure
- (Optional) Logging, JWT auth, MongoDB/Postgres support, etc.

---

## 🧱 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Containerization**: Docker
- **Package Manager**: npm / yarn
- **(Optional)**: MongoDB, JWT, Winston, etc.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- npm or yarn
- (Optional) Thunder Client VScode extension

1. If you see error like npm : File D:\nodejs\npm.ps1 cannot be loaded..., do
   > run Set-ExecutionPolicy -Scope CurrentUser
   > Type RemoteSigned

---

### Local Development

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start the app
npm run dev

### Docker
docker build . -t klim/node-web-app:v1
docker run -d -p 8001:8080 klim/node-web-app:v1 // Maps host port 8001 to container port 8080
docker exec -it *id* /bin/sh
docker run -d -p 8002:5010 -v %cd%:/app --env-file ./.env --name klimContainer klim/node-web-app:v2 // run in cmd, Mount the current directory into /app inside the container


# 🧠 Context & Knowledge

This project was built using **Express.js** and **Node.js 18+** to provide a fast, flexible, and minimal backend framework for REST APIs. The goal was to create a containerized, scalable backend service that can be easily deployed across environments using **Docker**.

## Why node.js
Node.js is a runtime environment that lets you run JavaScript code outside of a browser—mainly on the server side.
Think of Node.js as a way to use JavaScript to build backend applications, like web servers or APIs. Normally, JavaScript runs in the browser (like Chrome), but Node.js lets you use it to write scripts that can access the file system, handle network requests, or connect to databases—just like Python, Java, or C++.
- ⚡ **Non-blocking I/O**: Great for building scalable, high-performance APIs that handle many simultaneous requests efficiently.
- 🌍 **JavaScript Everywhere**: Enables using the same language across frontend and backend, simplifying full-stack development and onboarding.
- 🧰 **Rich Ecosystem (NPM)**: Access to thousands of battle-tested libraries and tools to accelerate development.
- 🚀 **Fast Execution**: Built on Google Chrome’s V8 engine, Node.js compiles JavaScript to machine code for fast performance.
- 🔁 **Great for Microservices & APIs**: Its event-driven architecture is well-suited for building RESTful services, WebSockets, and lightweight backend systems.

## Why Express.js?
Express is lightweight and unopinionated, making it ideal for building modular, testable APIs with full control over middleware and routing.

## Why Docker?
Docker ensures consistent environments across local dev, staging, and production. The app can be easily deployed via Docker Compose or any cloud-native platform (e.g., Kubernetes, ECS, Azure App Service).

## Why nodemon
Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.

## Key Architectural Principles

- **Modularity**: Separated logic into controllers, services, routes, and middleware
- **12-Factor App**: Uses `.env` for configuration and supports stateless containers
- **Scalability**: Easily extensible with new routes/services
- **Developer Experience**: Hot reloading (via nodemon), structured logs, and optional Swagger documentation

This structure is ideal for small to mid-scale microservices and quick backend prototypes. For more complex use cases (e.g., enterprise auth, real-time apps), frameworks like NestJS or Fastify may be considered.
