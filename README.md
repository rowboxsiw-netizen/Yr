
# Authorize Premium Splash Screen

A high-performance, Apple-inspired splash screen built with React 18, Tailwind CSS, and Framer Motion.

## Vercel Deployment Instructions

### 1. Push to GitHub
1. Create a new repository on GitHub.
2. Initialize your local directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Premium Authorize Splash Screen"
   ```
3. Connect and push:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com).
2. Click **New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the settings. Ensure the "Build Command" is `npm run build` or the default for your framework.
5. Click **Deploy**.

### 3. Deploy via Vercel CLI
If you have the Vercel CLI installed:
```bash
npm i -g vercel
vercel
```
Follow the prompts to deploy instantly.

## Features
- **Apple-Style UX**: Smooth 0.95 -> 1.0 scaling and fade-in/out transitions.
- **Glassmorphism**: Subtle blurred backgrounds and borders.
- **Performance**: Optimized Lighthouse-friendly assets and minimal dependencies.
- **Responsive**: Fully fluid layout for mobile, tablet, and desktop.
