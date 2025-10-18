# 🌟 Appify — Modern App Store Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-blue?style=for-the-badge&logo=netlify)](https://appify-appstore.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/Source%20Code-GitHub-black?style=for-the-badge&logo=github)](https://github.com/Sayfuddin-Naeem/appify-dev)

---

## 🧩 Overview

**Appify** is a modern, responsive web application that simulates an **App Store** experience.  
It allows users to browse, search, install, and manage applications seamlessly — all within the browser.  
Built with **React**, **TailwindCSS**, and **Vite**, it combines performance and elegant UI to deliver an interactive user experience.  

---

## ✨ Key Features

✅ **Show App** — Browse all apps with live search and sorting  
✅ **App Installation System** — Install/uninstall apps with LocalStorage persistence  
✅ **App Details Page** — Includes description, stats, and visualized rating chart via **Recharts**  
✅ **Real-Time Feedback** — Toast notifications powered by **React Toastify**  
✅ **Fully Responsive** — Optimized for mobile, tablet, and desktop  
✅ **Custom Loading States** — Smooth transitions using **React Spinners**  
✅ **Clean UI Components** — Styled with **TailwindCSS** and **DaisyUI**  
✅ **Error Handling** — Includes custom 404 and not-found messages  

---

## 🧠 Technologies Used

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, JavaScript (ES6+), HTML5, CSS3 |
| **Styling** | TailwindCSS, DaisyUI |
| **Routing** | React Router |
| **UI & Icons** | React Icons, React Spinners |
| **Visualization** | Recharts |
| **Notifications** | React Toastify |
| **Build Tool** | Vite |
| **Version Control** | Git & GitHub |
| **Deployment** | Netlify |

---

## 🏗️ Project Highlights

### 🧱 Layout & Navigation
- Reusable Header and Footer components  
- Logo, navigation links (`Home`, `Apps`, `Installation`), and GitHub contribution button  
- Dynamic active route highlighting  

### 📱 Home Page
- Engaging banner with call-to-action buttons  
- Top Apps section showing most popular apps  
- State cards displaying key statistics  

### 🔍 All Apps Page
- Search bar with **live filtering** (case-insensitive)  
- Sort dropdown to organize apps by downloads (High → Low / Low → High)  
- “No App Found” message when search returns empty results  

### 📊 App Details Page
- Displays app info, image, downloads, reviews, and rating  
- **Recharts integration** for visual rating distribution  
- **Install Button** updates instantly with **Toastify** success message  
- LocalStorage ensures app persistence  

### 💾 My Installation Page
- Displays installed apps dynamically  
- “Uninstall” feature removes app from LocalStorage and shows a toast notification  

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Sayfuddin-Naeem/appify-dev.git

# Navigate to the project folder
cd appify-dev

# Install dependencies
npm install

# Run the development server
npm run dev

---

## 🚀 Deployment

The project is deployed on **Netlify**  
✅ No route reload errors  
✅ Optimized production build via **Vite**

🔗 **Live Demo:** [https://appify-appstore.netlify.app/](https://appify-appstore.netlify.app/)

---

## 🧑‍💻 Developer

**👨‍💻 Sayfuddin Naeem**  
[GitHub](https://github.com/Sayfuddin-Naeem) • [LinkedIn](https://www.linkedin.com/in/sayfuddin-naeem/)  

> Passionate about building responsive, user-centric web applications with clean UI and modern tools.
