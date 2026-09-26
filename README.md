<div align="center">

<img src="public/assets/logo.png" alt="FitLog logo" width="56" />

# FitLog — Workout Library

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![DaisyUI](https://img.shields.io/badge/DaisyUI_5-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)

</div>

---

## 📖 About

FitLog is a responsive workout library built with the Next.js App Router. Browse twelve lifts that cover every major muscle group, open any lift to see its specs and step-by-step instructions, then add it to **Today's Plan** or **Save** it for later. The **My Plan** page tracks your exercises, minutes and calories live as you build and finish your session.

Workout data comes from the FitLog API:

| Endpoint | Description |
| --- | --- |
| `GET https://api.abcz.workers.dev/api/fitlog` | All workouts |
| `GET https://api.abcz.workers.dev/api/fitlog/:id` | A single workout |

## ✨ Key Features

1. **Workout library grid:** all 12 workouts as cards (3 × 4 on desktop) with image, muscle-group tags, equipment and duration/calorie/rating stats, plus an animated loading state while data streams in.
2. **Detailed workout pages:** a two-column layout with a large image, a key-specs panel (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions.
3. **Today's Plan and Saved lists:** add or save any lift with one click and get a toast confirmation. Today's plan is capped at five unfinished lifts, and duplicates are blocked.
4. **Live navbar counters and plan metrics:** the Plan and Saved badges and the Exercises / Minutes / Calories summary update instantly across pages, powered by a shared React Context.
5. **Plan management tools:** switch between tabs, sort by Duration, Calories or Rating, **Mark as Done**, or remove a lift, each with its own toast.
6. **Fully responsive, with a custom 404 page:** the layout adapts from phone to desktop, and unknown routes or workout IDs land on a custom 404 Not Found page.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org) (App Router) | Routing, server components, streaming and image optimization |
| [React 19](https://react.dev) | UI components, with the Context API for shared plan/saved state |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling, design tokens and responsive layout |
| [DaisyUI 5](https://daisyui.com) | Component library: navbar, menu, badges, tabs, dropdowns and buttons with a custom FitLog theme |
| [React Icons](https://react-icons.github.io/react-icons/) (Lucide set) | Stat, button and navigation icons |
| [React Hot Toast](https://react-hot-toast.com) | Toast notifications |
| Google Fonts: Oswald and Inter | Display and body typography via `next/font` |

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
│   └── PlanContext.jsx         # Plan/saved state (Context API)
└── lib/
    └── api.js                  # FitLog API helpers
```

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server at http://localhost:3000
npm run dev

# production build
npm run build && npm start
```

---

<div align="center">© 2026 FitLog — Workout Library. Train hard, log honest.</div>
