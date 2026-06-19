# 🇬🇷 Greek Language Teacher Website

### A modern educational website designed for a Greek language teacher and published author.

<p align="center">

<img src="https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />

<img src="https://img.shields.io/badge/TAILWIND CSS-7D8A67?style=for-the-badge&logo=tailwindcss&logoColor=white" />

<img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

<img src="https://img.shields.io/badge/MOTION-3F3428?style=for-the-badge&logo=framer&logoColor=white" />

<img src="https://img.shields.io/badge/LUCIDE ICONS-6B5D4E?style=for-the-badge" />

</p>

<p align="center">

<img src="https://img.shields.io/badge/GREEK LANGUAGE-7D8A67?style=for-the-badge" />

<img src="https://img.shields.io/badge/PERSONALISED LEARNING-3F3428?style=for-the-badge" />

<img src="https://img.shields.io/badge/RESPONSIVE DESIGN-6B5D4E?style=for-the-badge" />

<img src="https://img.shields.io/badge/ACCESSIBLE UI-65704F?style=for-the-badge" />

<img src="https://img.shields.io/badge/VERCEL DEPLOYED-8B7355?style=for-the-badge" />

</p>

---

## 📖 About The Project

This project is a modern, responsive website built for a professional Greek language teacher and published author.

The goal was to create a warm, welcoming, and trustworthy online presence that reflects both academic expertise and an engaging teaching style.

Unlike traditional educational websites that often feel rigid and text-heavy, this project focuses on:

- Personal connection
- Clear communication
- Elegant design
- Accessibility
- Smooth user experience
- Mobile-first responsiveness

The website allows prospective students to learn about the teacher, explore available lessons, read testimonials, and easily get in touch.

---

## ✨ Features

### Navigation

- Sticky navigation bar
- Responsive mobile menu
- Smooth scrolling between sections

### Hero Section

- Professional introduction
- Key teaching highlights
- Clear call-to-action buttons

### About Section

- Professional statistics
- Academic background
- Teaching experience overview

### Why Choose Me

- Personal teaching philosophy
- Student-focused approach
- Engaging visual presentation with icons

### Lessons & Services

- Categorised lesson offerings
- Interactive service cards
- Responsive grid layout

### Testimonials

- Student reviews
- Hover interactions
- Scroll-triggered animations

### Contact

- Email contact CTA
- Copy-to-clipboard functionality
- Accessible interactions

### User Experience

- Smooth scrolling
- Hover animations
- Micro-interactions
- Mobile-first design
- Responsive layouts

---

## 🛠 Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript

### Styling

- Tailwind CSS 4
- CSS Variables (Design System)

### Animation

- Motion

### Icons

- Lucide React

### Deployment

- Vercel

---

## 🧠 Architecture Decisions

### Data-Driven Content

All content is stored in dedicated data files instead of being hardcoded inside components.

Benefits:

- Easier maintenance
- Better scalability
- Cleaner components
- Content can be updated without touching UI logic

---

### Component-Based Structure

The application is built using reusable components:

- Navbar
- Hero
- About
- WhyChooseMe
- Services
- Testimonials
- Contact
- Footer

This approach improves:

- Readability
- Reusability
- Maintainability

---

### Reusable Animation System

Animations are abstracted into reusable wrappers:

- FadeIn
- StaggerContainer
- StaggerItem

Benefits:

- Consistent animations
- Cleaner implementation
- Easy future expansion

---

### Accessibility

The project includes:

- Semantic HTML
- Accessible navigation
- Keyboard-friendly interactions
- ARIA labels
- Visible focus states
- Responsive typography

---

## 📁 Project Structure

```text
app/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── WhyChooseMe.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── EmailCopy.tsx
│   ├── FadeIn.tsx
│   ├── StaggerContainer.tsx
│   └── StaggerItem.tsx
│
├── data/
│   ├── professor.ts
│   └── testimonials.ts
│
├── globals.css
├── layout.tsx
└── page.tsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📱 Responsive Design

The website is fully optimized for:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

---

## 🌍 Deployment

The project is deployed using Vercel.

Production builds are automatically generated when changes are pushed to the connected GitHub repository.

```bash
npm run build
```

---

## 🎯 Project Goals

This project was built to demonstrate:

- Modern React development
- Next.js App Router architecture
- TypeScript best practices
- Component-driven design
- Responsive UI development
- Accessibility principles
- Clean code organization
- Reusable animation patterns

---

## 👨‍💻 Author

Designed and developed using Next.js, TypeScript, Tailwind CSS, Motion, and Lucide Icons.

Built as a modern, maintainable, and accessible educational website.
