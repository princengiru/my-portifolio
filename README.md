# Prince NGIRUWONSANGA - Portfolio Website

A modern, responsive portfolio website built with React and Vite. This project showcases professional web development skills with a clean, dark-themed design featuring smooth animations, interactive components, and a functional contact form.

## 🚀 Features

- **Single Page Application (SPA)**: Smooth scrolling navigation between sections
- **Responsive Design**: Desktop-optimized with mobile notice (mobile version coming soon)
- **Interactive Components**:
  - Hero section with animated statistics
  - About section with floating social media bar
  - Work process timeline
  - Portfolio grid with project cards
  - Blog carousel with dot pagination
  - Services section with interactive cards
  - Testimonial section with client logos
  - Functional contact form with toast notifications
- **Form Handling**: Contact form using Web3Forms API for email submissions
- **Toast Notifications**: Custom-styled success/error messages with auto-dismiss
- **Smooth Scrolling**: Programmatic scroll navigation without URL hash changes
- **Modern UI**: Card-based design with subtle gradients and shadows

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Component Documentation](#component-documentation)
- [Key Features Explained](#key-features-explained)
- [Form Submission Logic](#form-submission-logic)
- [Styling Approach](#styling-approach)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: SVG icons (custom)
- **Form Service**: Web3Forms API
- **Package Manager**: npm

## 📁 Project Structure

```
my-portifolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, fonts, documents
│   │   ├── docs/          # CV and other documents
│   │   ├── fonts/         # Custom fonts
│   │   ├── icons/         # SVG icons
│   │   └── *.jpeg/png     # Project images
│   ├── components/        # React components
│   │   ├── Blog.jsx       # Blog carousel with pagination
│   │   ├── CallToAction.jsx   # CTA section
│   │   ├── Contact.jsx    # Contact form with toast notifications
│   │   ├── Footer.jsx     # Footer with navigation links
│   │   ├── Portfolio.jsx  # Portfolio grid
│   │   ├── Services.jsx   # Services section
│   │   ├── Testimonial.jsx # Client testimonials
│   │   └── WorkProcess.jsx # Process timeline
│   ├── App.css            # Global styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration
```

## 🎯 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/princengiru/my-portifolio.git
cd my-portifolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📚 Component Documentation

### App.jsx
Main application component that manages scroll navigation, renders all sections, and displays the mobile notice on smaller screens.

### Contact.jsx
Handles the contact form with state management, validation, Web3Forms API integration, and toast notifications for feedback.

### Blog.jsx
Horizontal scrolling blog carousel with dynamic page calculation based on screen width, dot pagination, and smooth scroll handling.

### Portfolio.jsx
Displays project cards with images, descriptions, status badges, and live links in a responsive grid layout.

### Services.jsx
Shows services with interactive card selection, descriptions, and a "Say Hello" button linking to contact.

### CallToAction.jsx
CTA section with a compelling headline and "Let's Work Together" button that scrolls to contact.

### Testimonial.jsx
Client testimonials with logo display and external links to client websites.

### Footer.jsx
Footer with brand logo, navigation links using onClick handlers, and copyright notice.

## 🔑 Key Features Explained

### 1. Smooth Scroll Navigation
Uses JavaScript's `scrollIntoView()` instead of anchor links to prevent URL hash changes and provide smoother scrolling.

### 2. Toast Notification System
Custom toast notifications with card-like appearance, title/description structure, SVG icons, auto-dismiss after 10 seconds, and smooth slide-in animation from bottom-right.

### 3. Blog Carousel Pagination
Dynamically calculates pages based on screen size (4 cards desktop, 2 tablet, 1 mobile) with dot pagination indicators that highlight the current page.

### 4. Mobile Notice
Full-screen overlay on devices ≤1024px displaying a "Desktop Only" message since the site is optimized for desktop viewing.

### 5. Form Submission with Web3Forms
Contact form uses Web3Forms API for email submissions - free tier, no backend required, simple integration. Replace the access key in Contact.jsx with your own from web3forms.com.

## 🎨 Styling Approach

### CSS Variables
Theme colors defined as CSS variables in `App.css` for easy customization: `--primary-color`, `--text-dark`, `--text-gray`, `--bg-light`, `--font-main`.

### Design System
Dark theme with lime green accent, Inter font family, consistent spacing using rem units, subtle borders, soft shadows, and smooth animations.

### Responsive Design
Uses media queries for responsive behavior at 1024px (tablet) and 640px (mobile) breakpoints.

## 🔧 Customization Guide

### Changing Theme Colors
Edit CSS variables in `App.css` to customize `--primary-color`, `--text-dark`, `--text-gray`, `--bg-light`, and `--font-main`.

### Adding Blog Posts
Edit the `blogPosts` array in `Blog.jsx` to add new blog entries with title, description, image, and URL.

### Adding Portfolio Projects
Edit the `portfolioItems` array in `Portfolio.jsx` to add new projects with title, description, image, status, and live link.

### Changing Form Access Key
Replace the access key in Contact.jsx with your own from web3forms.com.

### Adjusting Mobile Breakpoint
Edit the media query in `App.css` to change the 1024px breakpoint for the mobile notice.

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite
4. Deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect to GitHub for auto-deploys

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## 📝 Learning Resources

This project is great for learning:

- **React Hooks**: useState, useRef, useEffect
- **Form Handling**: Controlled components, validation, API integration
- **CSS**: Flexbox, CSS variables, animations, media queries
- **Event Handling**: onClick, onSubmit, onChange, onScroll
- **API Integration**: Fetch API, async/await
- **Component Architecture**: Reusable components, props drilling
- **State Management**: Local component state
- **DOM Manipulation**: scrollIntoView, getElementById

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Prince NGIRUWONSANGA**
- Portfolio: [prnc.dev](https://prnc.dev)
- GitHub: [@princengiru](https://github.com/princengiru)
- LinkedIn: [Prince Ngiruwonsanga](https://linkedin.com/in/prince-ngiruwonsanga-285325323/)

---

Built with ❤️ using React and Vite
