# MERN Authentication & Goals Management

## 🚀 Overview
This is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** authentication and goals management system. Users can register, log in, and manage their goals securely using JWT authentication.

## 📌 Features
- User authentication (Register/Login) with JWT
- Secure routes using middleware
- CRUD operations for managing goals
- Password hashing with **bcryptjs**
- State management using **Context API**
- API calls with **Axios**
- Protected routes in React

---

## 🛠️ Tech Stack
### Backend (Node.js, Express, MongoDB)
- **Express.js** - Backend framework
- **MongoDB & Mongoose** - Database & ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables

### Frontend (React.js)
- **React.js** - Frontend framework
- **React Router** - Navigation
- **Context API** - State management
- **Axios** - API requests
- **Tailwind CSS** - Styling

---

## ⚙️ Installation
### 1️⃣ Clone the repository
```sh
git clone https:https:github.com/SUKANT43/Goal-mern-Jwt
cd mern-auth-goals
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
- Create a `.env` file in `backend/` and add:
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/mern
JWT_SECRET=your_jwt_secret
```
- Start the backend server:
```sh
npm start
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
```
- Start the frontend:
```sh
npm start
```

---

## 🚀 Usage
- Open **http://localhost:3000/**
- Register a new user
- Log in to access protected routes
- Manage goals

---

## 📂 Project Structure
```
mern-auth-goals/
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│── frontend/
│   ├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.js
│   ├── index.js
```

---

## 📜 API Endpoints
### 🔹 User Routes (`/api/user`)
| Method | Route | Description |
|--------|------------|----------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/me` | Get user profile |

### 🔹 Goal Routes (`/api/goal`)
| Method | Route | Description |
|--------|------------|----------------|
| GET | `/get` | Get all goals |
| POST | `/post` | Create a goal |
| PUT | `/put/:id` | Update a goal |
| DELETE | `/delete/:id` | Delete a goal |

---

## 🛠️ Tools Used
- **Postman** - API Testing
- **MongoDB Compass** - Database Management

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify it.

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature-new`)
3. Commit changes (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-new`)
5. Create a **Pull Request**

---

## 💡 Contact
For any questions or suggestions, feel free to reach out:
- **Email:** sukant98657@gmail.com
