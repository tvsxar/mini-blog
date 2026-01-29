# Mini Blog

A full-featured blogging platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This project allows users to create, edit, delete, and view posts, with support for images, summaries, and rich content. The UI is responsive and modern.

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Author](#author)

---

## Description

Mini Blog allows you to:

- Create, read, update, and delete posts (CRUD)  
- Upload and manage post images via Cloudinary
- Use rich content with titles and summaries
- Manage posts through a responsive and modern UI

Backend is built with **Node.js + Express.js** and **MongoDB**.  
Frontend is built with **React (Vite)** and styled with **Tailwind CSS**.

---

## Live Demo

Try it online via our [Live Demo](https://mini-blog-backend-6rg8.onrender.com)!

---

## Features

- Full CRUD operations for posts  
- Image support and post summaries
- Add summaries and rich content  
- Responsive UI with modern Tailwind styling
- Optimized state management using React Context API  
- **Dockerized** setup for one-command orchestration
- **MERN stack** setup (MongoDB, Express.js, React, Node.js)  

---

## Technologies & Stack Explanation

- **MongoDB** — NoSQL database for storing posts  
- **Mongoose** — ODM for MongoDB  
- **Express.js / Node.js** — backend REST API  
- **React (Vite)** — frontend framework  
- **Tailwind CSS** — utility-first styling  
- **axios** — for HTTP requests from frontend  
- **Cloudinary** — cloud service for image management
- **Docker & Docker Compose** — for containerization and environment orchestration 

---

## Architecture & Flow

1. React frontend sends HTTP requests to backend API.  
2. Express.js backend handles requests and queries MongoDB.  
3. Backend returns JSON data.  
4. Frontend updates the UI and state based on API responses.  
5. In development, Docker Volumes ensure instant Hot Reload for both services.

---

## Installation & Run

### 1. The Quickest Way (Docker Compose)

_Requires [Docker](https://www.docker.com/get-started/)_

1. Create a `.env` file inside `backend/` (see variables below)
2. Run everything with one command:
   ```bash
   docker-compose up --build
   ```
3. Open http://localhost:5173 in your browser

### 2. Manual Setup (For Development)

If you want to run the services separately without Docker:

#### Backend

```bash
cd backend
npm install jsonwebtoken dotenv cors mongoose bcryptjs cloudinary cookie-parser express multer streamifier nodemon
# Create .env with PORT, MONGO_URL, CLIENT_URL
npm run dev
```

Backend .env variables:
```bash
PORT=1111
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

#### Frontend

```bash
cd frontend
npm install axios tailwindcss
# Create .env with VITE_API_URL
npm run dev
```

Frontend will be available at:
http://localhost:5173

---

## Project Structure

```
mini-blog/
├─ backend/
│  ├─ config/db.js
│  ├─ models/
│  │  └─ post.model.js
│  ├─ routes/
│  │  └─ postRoutes.js
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ PostForm.jsx
│  │  │  ├─ Post.jsx
│  │  │  ├─ PostsList.jsx
│  │  │  └─ Navbar.jsx
│  │  ├─ context/
│  │  │  └─ PostsContext.jsx
│  │  └─ api/
│  │     └─ api.js
```

---

## API Endpoints

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| GET    | /api/posts        | Get all posts                |
| POST   | /api/posts        | Add a new post               |
| PUT    | /api/posts/:id    | Update a post                |
| DELETE | /api/posts/:id    | Delete a  post               |
| GET    | /api/posts/:id    | Get a single post by ID      |

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)