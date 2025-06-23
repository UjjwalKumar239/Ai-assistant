# 🧠 Virtual AI Assistant
**A full-stack AI-powered web assistant built using React, Node.js, Express, MongoDB, and Google Gemini API.**

  This assistant can listen to your voice, respond intelligently, and perform smart tasks like:
  🔍 Searching ‧ ❓ Answering questions ‧ 🕒 Showing date/time ‧ 🌦️ Weather info ‧ and more.

# ✨ Features
🔐 User Authentication (JWT + Cookies)

🧑‍🎨 Assistant Personalization (Name & Image)

🤖 Gemini AI Integration (Intent-based AI responses)

🗣️ Voice-enabled Input/Output

🕘 Command History per User

☁️ Cloudinary Image Upload

🎨 Modern React UI (Tailwind CSS)

# 🛠️ Tech Stack
 ## *🌐 Frontend*
  ⚛️ React + React Router DOM

  📦 Axios

  🧠 Context API

  🎨 Tailwind CSS

## *💻 Backend*
  🚀 Express.js

  🍃 MongoDB + Mongoose

  🛡️ JWT + bcryptjs

📁 Multer (for file uploads)

🌩️ Cloudinary (image hosting)

🧠 Gemini API (AI logic)

⏱️ Moment.js (time formatting)

# 📁 Folder Structure
### pgsql
### Copy
### Edit
### client/

  ├── pages/
  
  ├── context/
  
  ├── App.jsx
  
  └── index.js

### server/

  ├── config/
  
  ├── controllers/
  
  ├── middlewares/
  
  ├── models/
  
  ├── routes/
  
  ├── gemini.js
  
  └── index.js
  
# 🧪 Environment Variables
Create a .env file inside the server/ directory and add the following:

env
Copy
Edit
PORT=5000
MONGODB_URL=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_URL=your_gemini_api_url

# ⚙️ Installation
bash
Copy
Edit
## Backend setup
cd server
npm install
npm run dev

## Frontend setup
cd client
npm install
npm run dev
