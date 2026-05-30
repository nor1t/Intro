Norit Qyqalla - Professional Portfolio

A modern, professional React-based portfolio website with a colorfull aesthetic. Built with TypeScript, Vite, and modern React patterns.

Features:

- Dark theme with neon accents (green, cyan, pink, yellow)
- 3D card effects, reveal animations, and floating shapes
- Mobile-optimized layout
- Built with Vite for optimal performance
- Fully typed for better DX
- Scroll-triggered animations, animated counters
- ARIA labels, semantic HTML, focus management

Project Structure
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
