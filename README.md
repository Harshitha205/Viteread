# 📖 VitaRead: The Gamified Reading Tracker

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

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
    * **Database & Auth:** Supabase (PostgreSQL, Authentication, RLS)
    * **Custom Logic:** Node.js with Express.js (for complex API endpoints)
* **Development Tool:**
    * **Editor:** Cursor (AI-powered code editor)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher)
* npm
* A free Supabase account

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/vitaread.git](https://github.com/your-username/vitaread.git)
    cd vitaread
    ```

2.  **Set up the Backend (Supabase):**
    * Create a new project on [Supabase](https://supabase.com).
    * Navigate to the **SQL Editor**.
    * Run the SQL scripts provided in the project to create your tables, policies, and functions.

3.  **Set up the Frontend:**
    * Navigate to your frontend directory.
    * Install the NPM packages:
        ```sh
        npm install
        ```
    * Create a `.env` file in the root of your frontend project.
    * Add your Supabase credentials to the `.env` file. You can find these in your Supabase project's **Settings > API**.
        ```env
        VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
        VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
        ```

4.  **Run the Frontend Development Server:**
    ```sh
    npm run dev
    ```
    Your application should now be running locally at `http://localhost:5173` (or a similar port).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
