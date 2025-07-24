# Developer Portfolio

A modern personal portfolio website built with React, TypeScript, and Vite. Features a responsive design with smooth scrolling navigation and showcases projects, skills, and professional experience.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🔧 TypeScript for type safety
- 🧭 Smooth scrolling navigation
- 🎯 Project showcase with GitHub links

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **UI Components**: Shadcn, Lucide React
<!-- - **Development**: ESLint, TypeScript ESLint -->

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── Portfolio.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ui/
├── assets/
│   └── images/
└── lib/
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.
