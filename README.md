# 📖 VitaRead: The Gamified Reading Tracker

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

VitaRead is a modern reading tracker platform designed to make reading more engaging and rewarding. Inspired by platforms like StoryGraph and the gamification of Duolingo, it combines a beautiful, literary-inspired aesthetic with interactive features to help you track your reading journey, set goals, and earn achievements.

---

## ✨ Key Features

* **Interactive Dashboard:** View your current reading progress at a glance.
* **Personal Library:** Manage your book collection with statuses like 'Currently Reading', 'Finished', and 'To Read'.
* **Visual Goal Tracking:** Set and monitor your annual or monthly reading goals with dynamic progress bars.
* **Gamified Rewards:** Unlock achievements and earn points for reaching milestones.
* **Modern & Responsive UI:** A clean, beautiful, and mobile-friendly interface.

---

## 🛠️ Tech Stack

This project is built with a modern, full-stack architecture.

* **Frontend:**
    * **Framework:** React (with Vite)
    * **Language:** TypeScript
    * **Styling:** Tailwind CSS
* **Backend:**
    * **Runtime:** Node.js
    * **Framework:** Express.js
    * **Database:** MongoDB
    * **Authentication:** JWT (JSON Web Tokens)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher)
* npm
* A MongoDB database (e.g., MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/vitaread.git](https://github.com/your-username/vitaread.git)
    cd vitaread
    ```

2.  **Set up the Backend:**
    * Set up your MongoDB database and get your connection string.
    * Navigate to the `/backend` directory and install dependencies:
        ```sh
        cd backend
        npm install
        ```
    * Create a `.env` file and add your MongoDB connection string and JWT secret:
        ```env
        MONGO_URI="your-mongodb-connection-string"
        JWT_SECRET="your-jwt-secret-key"
        ```

3.  **Set up the Frontend:**
    * Navigate to your frontend directory.
    * Install the NPM packages:
        ```sh
        cd frontend
        npm install
        ```
    * Create a `.env` file in the root of your frontend project.
    * Add the URL for your backend API:
        ```env
        VITE_API_URL="http://localhost:3001"
        ```

4.  **Run the Servers:**
    * In one terminal, start the backend server:
        ```sh
        # from the backend directory
        npm start
        ```
    * In another terminal, start the frontend development server:
        ```sh
        # from the frontend directory
        npm run dev
        ```
    Your application should now be running locally.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
