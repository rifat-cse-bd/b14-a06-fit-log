<div align="center">

<img src="public/assets/logo.png" alt="FitLog logo" width="64" />

# FitLog

### Workout Library & Daily Training Planner

**Train with intent. Log every set.**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![DaisyUI](https://img.shields.io/badge/DaisyUI_5-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)

[**🔗 Live Site**](#) · [**📂 Repository**](https://github.com/rifat-cse-bd/b14-a06-fit-log)

</div>

---

## 📖 About the Project

**FitLog** is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

Browse a library of twelve lifts that covers every major muscle group, open any workout for its full specs and step-by-step instructions, and build a focused plan for the day. You can have up to five lifts in the plan at a time. The **My Plan** page keeps a live count of your exercises, minutes and calories as you train.

---

## ✨ Key Features

### 1. 🏋️ Workout Library
All 12 workouts load from the FitLog API into a responsive card grid (3 × 4 on desktop). Each card shows an illustration, muscle-group tags, equipment and quick stats: ⏱ duration, 🔥 calories and ⭐ rating. An animated loader shows while the data loads.

### 2. 📋 Detailed Workout Pages
Every lift has its own page in a two-column layout: a large image on one side, and on the other a key-specs panel (equipment, difficulty, sets, reps, duration, calories, rating) with numbered instructions.

### 3. ➕ Today's Plan & Saved List
Add a lift to **Today's Plan** or **Save it for later** with one click, and a toast notification confirms every action. The plan is capped at five unfinished lifts, and duplicates are blocked.

### 4. 📊 Live Counters & Plan Metrics
The **Plan** and **Saved** badges in the navbar, and the **Exercises / Minutes / Calories** summary on My Plan, update the moment you add, finish or remove a workout.

### 5. 🗂️ Plan Management Tools
Switch between the **Today's Plan** and **Saved** tabs, sort by **Duration**, **Calories** or **Rating**, **Mark as Done** ✅, or remove a lift ❌. Each action gives instant feedback.

> 📱 The whole app is fully responsive on mobile, tablet and desktop, and includes a custom **404 Not Found** page for unknown routes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org) (App Router) | Routing, server components, streaming and image optimization |
| [React 19](https://react.dev) | UI components and the Context API for shared plan/saved state |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling and responsive layout |
| [DaisyUI 5](https://daisyui.com) | Component library: navbar, menu, badges, tabs, dropdown and buttons, with a custom FitLog theme |
| [React Icons](https://react-icons.github.io/react-icons/) | Lucide icon set for stats, buttons and navigation |
| [React Hot Toast](https://react-hot-toast.com) | Toast notifications |
| [Google Fonts](https://fonts.google.com) | **Oswald** for headings and **Inter** for body text, via `next/font` |

---

## 🗺️ Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero banner and the workout library |
| `/workouts/:id` | Workout details with the plan and save actions |
| `/my-plan` | Today's Plan and Saved tabs, with live metrics |
| `*` | Custom 404 Not Found page |

---

## 🔌 API

| Method | Endpoint | Returns |
| --- | --- | --- |
| `GET` | `https://api.abcz.workers.dev/api/fitlog` | All workouts |
| `GET` | `https://api.abcz.workers.dev/api/fitlog/:id` | A single workout |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                 # Home: hero + library
│   ├── workouts/[id]/page.js   # Workout details
│   ├── my-plan/page.js         # Today's Plan / Saved
│   ├── not-found.js            # 404 page
│   └── layout.js               # Navbar, footer, toasts, fonts
├── components/                 # Navbar, Hero, WorkoutCard, my-plan/*, …
├── context/
│   └── PlanContext.jsx         # Plan & saved state (Context API)
└── lib/
    └── api.js                  # FitLog API helpers
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/rifat-cse-bd/b14-a06-fit-log.git
cd b14-a06-fit-log

# 2. Install dependencies
npm install

# 3. Start the development server → http://localhost:3000
npm run dev

# 4. Build for production
npm run build && npm start
```

---

<div align="center">

**© 2026 FitLog — Workout Library. Train hard, log honest.** 💪

</div>
