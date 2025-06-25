# 🌐 LOST & TRACE – Lost and Found Item Tracker

LOST & TRACE is a full-stack web application that connects people who have lost something with those who’ve found items. It’s built to streamline the process of recovering lost belongings through a simple and secure platform.

## 🔗 Live Site
[👉 Visit Live Site](https://lost-trace.web.app)


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
- 🧾 **Meaningful Commit History** (Client: 15+, Server: 8+)

---

## 🧰 Technologies & Packages Used

### ⚛️ Frontend (React + Vite + Tailwind CSS)
- `React Router DOM`
- `Firebase`
- `Framer Motion`
- `React Hook Form`
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
- `MongoDB Atlas`
- `Express.js`

---

## 🧑‍💻 Pages & Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home with Slider, Latest Items, Extra Sections | Public |
| `/login` | Login Page | Public |
| `/register` | Register Page | Public |
| `/allItems` | All Lost & Found Posts | Public |
| `/items/:id` | Single Post Details + Recover Button | Private |
| `/addItems` | Add New Post | Private |
| `/myItems` | Manage User's Posts | Private |
| `/updateItems/:id` | Update Existing Post | Private |
| `/allRecovered` | Recovered Posts List | Private |
| `*` | 404 Not Found Page | Public |

---

## 🛡️ Security

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

## 📬 Contact / Credit

> Crafted 💻 by [Apolo Barua]  
---

