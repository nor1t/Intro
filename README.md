# Norit Qyqalla - Professional Portfolio

A modern, professional React-based portfolio website with a cyberpunk aesthetic. Built with TypeScript, Vite, and modern React patterns.

## Features

- ✨ **Cyberpunk Design**: Dark theme with neon accents (green, cyan, pink, yellow)
- 🎨 **Smooth Animations**: 3D card effects, reveal animations, and floating shapes
- 📱 **Responsive**: Mobile-optimized layout
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🎯 **TypeScript**: Fully typed for better DX
- 📊 **Interactive Components**: Scroll-triggered animations, animated counters
- ♿ **Accessible**: ARIA labels, semantic HTML, focus management

## Project Structure

```
src/
├── components/          # React components
│   ├── BootScreen.tsx   # Loading animation
│   ├── ProfileCard.tsx  # Hero profile section
│   ├── SkillGrid.tsx    # Skills hexagon grid
│   ├── ProjectCard.tsx  # Project cards
│   ├── NavDots.tsx      # Section navigation
│   ├── FloatingShapes.tsx # Background animation
│   └── ...
├── hooks/              # Custom React hooks
│   └── index.ts        # useIntersectionObserver, useMouseMove3D, useCountUp
├── constants/          # Data and theme constants
│   └── index.ts
├── styles/            # Global styles
│   └── global.css     # CSS with animations
├── App.tsx            # Main app component
└── main.tsx           # React entry point
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Customization

### Update Profile Data
Edit `src/constants/index.ts` to update:
- Profile name, title, description
- Social media links
- Skills and expertise levels
- Project information
- Statistics

### Modify Styling
- Global styles: `src/styles/global.css`
- CSS variables for colors are defined in `:root`
- Customize animations and theme colors

### Add/Remove Sections
All sections are modular components in `src/components/`. Easily add new sections by:
1. Creating a new component
2. Adding it to `src/components/index.ts`
3. Importing and using it in `src/App.tsx`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- **Vite**: Fast HMR and optimized builds
- **Code Splitting**: Components are automatically code-split
- **Tree Shaking**: Unused code is removed
- **CSS**: Global CSS with optimized animations

## Tech Stack

- **React 18**: Latest React with hooks
- **TypeScript**: Type safety and better DX
- **Vite**: Next-generation frontend tooling
- **CSS**: Custom CSS with CSS variables and animations
- **Intersection Observer API**: For scroll-triggered animations

## Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Email contact form
- [ ] Blog section
- [ ] Project filtering
- [ ] Internationalization (i18n)
- [ ] Animation preferences

## License

MIT

## Author

Norit Qyqalla - Full-Stack Engineer

---

**Version**: 2.1.0 | **Last Updated**: 2026
