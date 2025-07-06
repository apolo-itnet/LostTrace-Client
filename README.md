# 🌐 LOST & TRACE – Lost and Found Item Tracker

LOST & TRACE is a full-stack web application that connects people who have lost something with those who’ve found items. It’s built to streamline the process of recovering lost belongings through a simple and secure platform.

---
## 🌐 Live Links
🔗 **Live Website**: https://lost-trace.web.app  <br>
🔗 **Client GitHub**: https://github.com/apolo-itnet/LostTrace-Client <br>
🔗 **Server GitHub**: https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-apolo-itnet


---

## 🧪 How to Run Locally

> Prerequisites: Node.js, MongoDB, npm/yarn

### 1. Clone the Client

```bash
git clone https://github.com/your-username/lost-trace-client.git
cd lost-trace-client
npm install
npm run dev
```
### 2. Clone the Server
```
git clone https://github.com/your-username/lost-trace-server.git
cd lost-trace-server
npm install
npm start
```

### 3. Environment Variables
**Client .env**

```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Server .env**
```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/losttraceDB
JWT_SECRET=your_secret_key
```


## 🛠 Tech Stack

### Frontend:
- React.js
- Tailwind CSS + DaisyUI
- React Router
- AOS, Framer Motion
- React Icons, SweetAlert2, React Toastify
- Firebase Authentication
- Vite, Netlify Hosting

### Backend:
- Node.js, Express.js
- MongoDB (Mongoose)
- JWT & Cookie Authentication
- Dotenv, CORS, Helmet
- Vercel Hosting

---

## 🎯 Project Purpose

The goal of this project is to provide a user-friendly platform for reporting and finding lost items. It includes authentication, protected routes, CRUD functionality, and real-time updates, offering a complete MERN stack experience.

---

## 💡 Key Features

- 🔐 **Firebase Authentication** (Email/Password & Google Login)
- 🧠 **JWT Authorization** for private route protection
- 📄 **Dynamic Page Titles** per route
- 🌐 **Fully Responsive** for mobile, tablet, and desktop
- 💬 **Toast & SweetAlert** notifications
- 🗂️ **Lost & Found Item Categorization**
- 🎨 **Framer Motion Animations**
- 🔍 **Search Functionality** on All Items page
- ✏️ **Item Update & Delete** with confirmation modal
- 📊 **View Items in Card/Table Layout Toggle**

---

## 🧰 Technologies & Packages Used

### ⚛️ Frontend (React + Vite + Tailwind CSS)
- `React Router`
- `Firebase`
- `Framer Motion`
- `React DatePicker`
- `Axios`
- `React Icons`
- `AOS`
- `SwiperJS`
- `SweetAlert2`
- `Tailwind CSS` + `DaisyUI`

### 🖥️ Backend (Node.js + Express + MongoDB)
- `Cors`
- `JWT`
- `Dotenv`
- `MongoDB`
- `Express.js`

---

### 🧑‍💻 Pages & Routes
| Route                     | Description                        | Protected |
| ------------------------- | ---------------------------------- | --------- |
| `/`                       | Home page                          | ❌         |
| `/login`, `/register`     | Auth pages                         | ❌         |
| `/add-lost`, `/add-found` | Add item                           | ✅         |
| `/my-posts`               | View/manage your listings          | ✅         |
| `/details/:id`            | Post detail view with claim option | ✅         |
| `/feedback`               | Submit feedback                    | ✅         |

---

### 🧾 CRUD Functionalities
- ✅ Create: Add new lost/found posts
- ✅ Read: View all posts & details
- ✅ Update: Edit your own listings
- ✅ Delete: Remove your item posts

---

### 🛡️ Security

- 🔐 **Firebase & MongoDB credentials secured** via `.env` variables.
- 📜 **JWT token** used to protect private routes and validate user identity.

---

## 🚀 Deployment

- ✅ Live hosted on **Vercel / Netlify** (Client) and **Render / Cyclic** (Server)
- 🛠️ Server & Client error-handled (No 404, 504, CORS errors)
- ⚠️ Private routes persist login on reload
- 🔐 Firebase domain authorized for the production domain

---

## ✅ Bonus Features

- ✅ Dynamic layout toggle on `/allRecovered`
- ✅ Extra Feature: Feedback System / Rating Component
- ✅ UI Enhanced with Framer Motion, AOS, and Tailwind Utilities

---

## 📸 Screenshots

> Include screenshots here if needed  
> ![Home Page](screenshot-url)  
> ![Add Item Form](screenshot-url)  
> ![Details Modal](screenshot-url)

---

### 💡 Inspiration
"Lost Trace" was inspired by the everyday need for a digital Lost & Found system. <br>
Whether someone loses a wallet, mobile, or pet — this platform aims to connect honest finders with those desperately looking for what they lost.

---

### 📬 Submission
This project was submitted as Assignment-11 in the MERN Stack Developer Program.

---

### 👨‍💻 Developer Info
**Apolo Barua Apurbo**   <br> 
💼 MERN Stack Web Developer  <br> 
📧 **Email**: apolo.itnet@gmail.com  <br> 
📍 **Location**: Bangladesh  <br> 

