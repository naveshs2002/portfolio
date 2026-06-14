# Navesh S — Premium Glassmorphism Developer Portfolio

A modern, production-ready personal portfolio built with **React + Vite + Tailwind CSS**,
featuring a dark-mode-first glassmorphism design, animated gradients, smooth scroll,
and motion design powered by Framer Motion.

## ✨ Features

- Sticky glassmorphism navbar with smooth scroll & mobile menu
- Animated hero with typing effect (`react-type-animation`)
- About section with animated stat counters
- Vertical timeline for education & experience (`react-vertical-timeline-component`)
- Skills section with animated progress bars
- Project carousel (Swiper) + live GitHub repo stats + GitHub contribution calendar
- Certifications grid
- Blog list with individual blog post pages (`react-router-dom`)
- Contact form wired to EmailJS
- Floating rule-based chatbot assistant
- Dark / light theme toggle (persisted via `localStorage`)
- Fully responsive, animated, glassmorphism UI

## 🛠️ Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router DOM
- React Icons
- React Type Animation
- Swiper
- React Vertical Timeline Component
- React GitHub Calendar
- EmailJS (`@emailjs/browser`)

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/                 # Images, icons, static assets
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FloatingShapes.jsx
│   ├── About.jsx
│   ├── Timeline.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx         # Wraps carousel + github projects + graph
│   ├── ProjectCarousel.jsx
│   ├── GithubProjects.jsx
│   ├── ContributionGraph.jsx
│   ├── Certifications.jsx
│   ├── Blog.jsx
│   ├── Chatbot.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── data/
│   ├── experience.js
│   ├── projects.js
│   ├── certifications.js
│   └── blogs.js
├── services/
│   ├── github.js
│   ├── chatbot.js
│   └── email.js
├── pages/
│   ├── Home.jsx
│   └── BlogDetails.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Configuration

### 1. Resume
Replace the placeholder file at `public/resume-navesh-s.pdf` with your real resume.
The "Download Resume" button in the Hero section links to this file.

### 2. Profile Photo
The Hero section currently uses a stylised "NS" avatar. To use a real photo:
- Add your image to `src/assets/` (e.g. `profile.jpg`)
- Import it in `Hero.jsx` and replace the avatar `<div>` with an `<img>` tag.

### 3. Contact Form (EmailJS)
1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service and Email Template
3. Open `src/services/email.js` and replace:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

   with your own EmailJS credentials. Until configured, the form simulates a
   successful send so you can test the UI.

### 4. GitHub Data
The GitHub username is configured in `src/services/github.js`:

```js
const GITHUB_USERNAME = 'naveshs2002'
```

This powers:
- Repo stats (stars/forks) in `GithubProjects.jsx`
- The contribution calendar in `ContributionGraph.jsx`

### 5. Content Data
Update your projects, certifications, blog posts and timeline entries in:
- `src/data/projects.js`
- `src/data/certifications.js`
- `src/data/blogs.js`
- `src/data/experience.js`

## 🌐 Deployment

### GitHub Pages (with custom domain navesh.in)

1. Install the deploy dependency (already included): `gh-pages`
2. A `CNAME` file with `navesh.in` is already included in `public/` — it will be
   copied to `dist/` on build, configuring your custom domain on GitHub Pages.
3. Push your code to a GitHub repository.
4. Deploy:

   ```bash
   npm run deploy
   ```

5. In your repository settings → **Pages**, set the source to the `gh-pages` branch.
6. In your domain registrar, point `navesh.in` to GitHub Pages:
   - Add an `A` record pointing to GitHub Pages IPs (185.199.108.153, etc.)
   - Add a `CNAME` record for `www` pointing to `<username>.github.io`

> If deploying to a GitHub Pages **project site** without a custom domain
> (e.g. `https://username.github.io/repo-name/`), update `base` in
> `vite.config.js` to `'/repo-name/'` and remove/adjust the `CNAME` file.

## 🎨 Design Tokens

| Token       | Value     |
|-------------|-----------|
| Background  | `#0f172a` |
| Primary     | `#38bdf8` |
| Secondary   | `#8b5cf6` |
| Accent      | `#14b8a6` |

Glass effect utility (`.glass` in `src/index.css`):

```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.12);
```

---

Built with ❤️ for **Navesh S** — Chennai, Tamil Nadu, India.
