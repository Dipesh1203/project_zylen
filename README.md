
# 🚀 Project Setup Guide
# API Documentation : [Link](https://documenter.getpostman.com/view/31207674/2sAYkDPMJy)
## 📌 Prerequisites  
Before setting up the project, ensure you have the following installed on your system:  
- **Node.js** (LTS version recommended) → [Download here](https://nodejs.org/)  
- **Git** → [Download here](https://git-scm.com/)  
- **A package manager** (npm )  

---

## 📥 Clone the Repository  
Run the following command to clone the project:  
```bash
git clone https://github.com/Dipesh1203/project_zylen.git
cd project_zylen
```

---

## 📦 Install Dependencies  
Run the following command inside the project directory:  
```bash
npm install
```

This will install all required dependencies listed in `package.json`.

---

## 🔧 Environment Variables  
1. Create a `.env` file in the root directory.  
2. Add the necessary environment variables (example below or  You can follow .sample.env): 
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Make sure to replace placeholders with actual values.

---

## 🚀 Start the Server (with auto-reload)  

```bash
npm run start
```
This will start the server using **nodemon**, allowing automatic reloads.
This runs the server normally.

---

## 🔥 API Testing  
- Use **Postman**, **cURL**, or **Thunder Client** to test the API endpoints.  

---

