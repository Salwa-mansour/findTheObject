<div align="center">

# 🎯 Minimalist Find the Object Game

A clean, minimalist hidden-object web game built for quick play, featuring complex coordinate scaling, cross-device touch handling, and a custom administrative control panel.

[**Explore Live Demo**](https://find-the-object-lilac.vercel.app) · [**Report Bug**](https://github.com/Salwa-mansour/findTheObject/issues)

</div>

<br>
<img width="342" height="736" alt="game2" src="https://github.com/user-attachments/assets/d752ed60-6071-424b-9d15-219af9429471" />
<img width="340" height="726" alt="game3" src="https://github.com/user-attachments/assets/543a9bfc-ad1e-4082-8dcb-1ec149a0fe3f" />

---

## ⚡ About The Project

This project is a modern, minimalist take on the classic hidden-object challenge. Designed with a clean frontend interface, the core focus of this build was solving complex backend and frontend engineering hurdles—specifically regarding image scaling, coordinate mapping across viewports, and touch-screen reliability without the bloat of a login system.

### ✨ Key Features
* **Minimalist UI:** Clean, distraction-free interface focused purely on gameplay and smooth interaction.
* **No Authentication Required:** Instantly accessible with no signup or login walls slowing down the experience.
* **Custom Admin Control Panel:** Built-in utility tool for easy game management and configuration.

---

## 🛠️ Technical Challenges & Solutions

### 1. The Coordinate Mapping Challenge (Algorithmic Logic)
* **The Issue:** Because users view images scaled to fit various screen sizes, raw click coordinates on the frontend did not match the original dimensions stored in the backend database.
* **The Solution:** Developed a scaling algorithm that calculates the dynamic aspect ratio and renders image bounds in real-time, mapping percentage-based relative coordinates (`x` and `y`) to ensure precise hitbox detection regardless of display size.

### 2. Touch Screen & Viewport Variance
* **The Issue:** Mobile and touch devices return differing viewport dimensions and event offsets compared to desktop mouse events (due to browser toolbars, zooming, and touch bounding boxes).
* **The Solution:** Normalized touch and click event listeners by utilizing `getBoundingClientRect()` relative to the active target element, ensuring seamless accuracy on mobile screens.

### 3. Custom Control Panel Utility
* **Management Tool:** Built a custom-tailored control panel utility specifically for backend management, allowing quick updates and administration without requiring external third-party dashboards.

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, CSS 
* **Backend:** Node.js, Express.js
* **Deployment:** Vercel (Frontend) & Render/Neon (Backend)

---

## 📂 Getting Started

To run this project locally:

1. **Clone the repo:**
   ```bash
   Backend Setup:

Bash
```
git clone [https://github.com/Salwa-mansour/findTheObject.git](https://github.com/Salwa-mansour/findTheObject.git)
cd backend
pnpm install
# Add your environment variables in a .env file
pnpm run dev
```
Frontend Setup:

Bash
```
cd ../frontend
pnpm install
```
# Add your API base URL in a .env file
```
pnpm run dev
```
💡 What I Learned
Building this game heavily improved my problem-solving skills around geometric mapping, responsive coordinate mathematics, and building efficient custom utilities without relying on heavy boilerplate frameworks.

📝 License
Distributed under the MIT License.
 
