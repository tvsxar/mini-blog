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
- Add images to posts  
- Include summaries and rich content in posts  
- Enjoy a responsive, modern UI  

Backend is built with **Node.js + Express.js** and **MongoDB**.  
Frontend is built with **React (Vite)** and styled with **Tailwind CSS**.

---

## Live Demo

Try it online via our [Live Demo](https://mini-blog-frontend-s7ok.onrender.com)!

---

## Features

- Full CRUD operations for posts  
- Upload images with posts  
- Add summaries and rich content  
- Responsive UI design  
- Optimized state management using React Context API  
- **MERN stack** setup (MongoDB, Express.js, React, Node.js)  

---

## Technologies & Stack Explanation

- **MongoDB** — NoSQL database for storing posts  
- **Mongoose** — ODM for MongoDB  
- **Express.js / Node.js** — backend REST API  
- **React (Vite)** — frontend framework  
- **Tailwind CSS** — utility-first styling  
- **axios** — for HTTP requests from frontend  

---

## Architecture & Flow

1. React frontend sends HTTP requests to backend API.  
2. Express.js backend handles requests and queries MongoDB.  
3. Backend returns JSON data.  
4. Frontend updates the UI and state based on API responses.  

---

## Installation & Run

### Backend

```bash
cd backend
npm install
npm i express mongoose cors dotenv cookie-parser bcryptjs jsonwebtoken
```

Create a `.env` file inside `backend/` with the following:

```env
PORT=1111
MONGO_URI=your_mongo_connection_string
CLIENT_URL=http://localhost:5173
```

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm i axios tailwindcss @tailwindcss/vite react-router-dom
```

Create a `.env` file inside `frontend/` with the following:

```env
VITE_API_URL=http://localhost:1111
```

```bash
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