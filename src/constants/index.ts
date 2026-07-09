import foto from '../foto.png'

export const PROFILE_DATA = {
  name: 'NORIT QYQALLA',
  title: 'FULL-STACK ENGINEER',
  description: 'I build fast, scalable web and mobile apps. Passionate about clean code, data engineering, and turning ideas into real products.',
  avatar: foto,
  social: [
    { icon: 'fa-brands fa-github', label: 'GitHub', url: 'https://github.com/nor1t', value: 'github.com/nor1t' },
    { icon: 'fa-brands fa-x-twitter', label: 'Twitter', url: 'https://x.com/NoritQy', value: '@NoritQy' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', url: 'https://www.linkedin.com/in/noriti/', value: 'LinkedIn' },
    { icon: 'fa-solid fa-envelope', label: 'Email', url: 'mailto:qnorit@gmail.com', value: 'qnorit@gmail.com' },
  ],
}

export const ABOUT = {
  tag: '// IDENTITY.LOG',
  title: 'ABOUT ME',
  paragraphs: [
    "I'm a full-stack engineer based in Kosovo with a passion for building web and mobile applications that are reliable, performant, and enjoyable to use. I enjoy working across the entire stack, from designing intuitive user interfaces to building the backend systems that power them.",
    "My primary frontend tools are React, React Native, and TypeScript, where I focus on creating responsive, accessible, and maintainable applications. On the backend, I work with C#, Node.js, and SQL to develop scalable APIs and data-driven systems. I value clean architecture, strong typing, and writing code that's easy to understand and maintain.",
    "I'm also interested in data engineering and machine learning. I've worked with Python and PySpark on projects involving data processing, analytics, and experimentation, and I enjoy finding practical ways to bring data-driven features into real products. For me, every project is an opportunity to improve my skills and explore new technologies.",
    "Outside of work, I like experimenting with new tools and frameworks, contributing to open-source projects when I can, and sharing knowledge with other developers in the local community. I believe the best software comes from people who keep learning, collaborate well, and take pride in building things that last.",
  ],
  highlights: [
    { icon: 'fa-solid fa-rocket', label: 'End-to-end shipping', value: 'From idea to production' },
    { icon: 'fa-solid fa-bolt', label: 'Performance-first', value: 'Fast by default' },
    { icon: 'fa-solid fa-shield-halved', label: 'Type-safe code', value: 'TS + C# all the way' },
    { icon: 'fa-solid fa-brain', label: 'Always learning', value: 'ML & data on the side' },
  ],
}

export const SKILLS = [
  { name: 'HTML', icon: 'fa-brands fa-html5', color: 'hex-cyan', level: 95 },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: 'hex-cyan', level: 92 },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'hex-yellow', level: 95 },
  { name: 'React', icon: 'fa-brands fa-react', color: 'hex-cyan', level: 94 },
  { name: 'React Native', icon: 'fa-brands fa-react', color: 'hex-cyan', level: 88 },
  { name: 'C#', icon: 'fa-solid fa-code', color: 'hex-pink', level: 82 },
  { name: 'SQL', icon: 'fa-solid fa-database', color: 'hex-yellow', level: 85 },
  { name: 'TypeScript', icon: 'fa-solid fa-code', color: 'hex-cyan', level: 90 },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: 'hex-green', level: 93 },
  { name: 'Python', icon: 'fa-brands fa-python', color: 'hex-yellow', level: 88 },
  { name: 'PySpark', icon: 'fa-solid fa-code', color: 'hex-green', level: 80 },
  { name: 'Machine Learning', icon: 'fa-solid fa-brain', color: 'hex-cyan', level: 92 },
]

export const PROJECTS = [
  {
    name: 'KosVibe',
    tagline: 'Social music discovery platform',
    description: 'KosVibe is a mobile travel companion that helps locals and tourists discover the best of Kosovo. From traditional restaurants and community events to rural markets, cultural monuments, and mountain adventures.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/KosVibe',
    tags: ['ReactNative', 'Node.js', 'WebSockets'],
    featured: true,
  },
  {
    name: 'LFGconnect',
    tagline: 'Gaming community & team finder',
    description: 'Connect with teammates and build communities around your favorite games and activities in your University Campus. Includes matchmaking, voice-ready lobbies, and persistent group profiles with activity feeds.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
    forks: 0,
    url: 'https://github.com/nor1t/LFGconnect',
    tags: ['ReactNative', 'Firebase', 'Realtime'],
    featured: true,
  },
  {
    name: 'SEMAFORI',
    tagline: 'Smart traffic management system',
    description: 'Smart traffic management system with real-time monitoring and optimization features. Uses sensor data and adaptive timing algorithms to reduce congestion at urban intersections.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/SEMAFORI',
    tags: ['React', 'IoT', 'Optimization'],
    featured: false,
  },
  {
    name: 'ExpensesTracker',
    tagline: 'Personal & shared finance tracker',
    description: 'Intelligent expense tracking application for managing personal finances. Supports multi-user ledgers, category insights, and monthly budgeting with visual breakdowns.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
    forks: 0,
    url: 'https://github.com/nor1t/ExpensesTracker',
    tags: ['ReactNative', 'Charts', 'Budgeting'],
    featured: false,
  },
  {
    name: 'smartBINS',
    tagline: 'Monitor waste levels in bins and optimize collection routes',
    description: 'By creating an application that uses IoT sensors to monitor waste levels in bins and optimize collection routes, improving urban sanitation efficiency',
    language: 'HTML/CSS/JS',
    languageColor: '#c86830',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/smartBINS.git',
    tags: ['HTML/CSS/JS', 'ETL', 'Data Engineering'],
    featured: false,
  },
  {
    name: 'WeatherAPP',
    tagline: 'Monitor waste levels in bins and optimize collection routes',
    description: 'A whole new design for a weather application that provides accurate and up-to-date weather information, including temperature, humidity, wind speed, and forecasts for multiple locations.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/WeatherAPP.git',
    tags: ['ReactNative', 'API', 'Data Visualization'],
    featured: false,
  },
  {
    name: 'QUIZ',
    tagline: 'Monitor waste levels in bins and optimize collection routes',
    description: 'A quiz application that allows users to test their knowledge on various topics. It features multiple-choice questions, scoring, and a leaderboard to encourage competition and learning.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/QUIZ.git',
    tags: ['ReactNative', 'State Management', 'Testing'],
    featured: false,
  },
  {
    name: 'NotesAPP',
    tagline: 'Monitor waste levels in bins and optimize collection routes',
    description: 'NotesAPP is a cross-platform mobile note-taking application built with React Native. It allows users to create, edit, and organize notes. The app supports offline access, synchronization across devices.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/NotesAPP.git',
    tags: ['ReactNative', 'Rows', 'Notes'],
    featured: false,
  },
]

export const EDUCATION = [
  {
    institution: 'University "Isa Boletini" in Mitrovica',
    degree: 'BSc in Computer Science and Engineering',
    period: '2023 — 2026',
    description: 'Studied software engineering fundamentals, algorithms, databases, and distributed systems. Final project focused on real-time  applications and data visualization.',
    icon: 'fa-solid fa-graduation-cap',
    color: 'var(--green)',
  },
  {
    institution: 'Online Certifications & Bootcamps',
    degree: 'Full-Stack & Data Engineering Track',
    period: '2021 — 2026',
    description: 'Completed specialized tracks in React, TypeScript, C#/.NET, and PySpark. Built and shipped capstone projects across web, mobile, and data engineering domains.',
    icon: 'fa-solid fa-certificate',
    color: 'var(--cyan)',
  },
  {
    institution: 'Self-Directed Learning',
    degree: 'Machine Learning & Applied AI',
    period: '2020 — Present',
    description: 'Ongoing study of everything that includes software engineering, data science, and machine learning. Focused on practical applications of ML in web and mobile products.',
    icon: 'fa-solid fa-brain',
    color: 'var(--pink)',
  },
]

export const STATS = [
  { value: 3, suffix: '+', label: 'Years Coding' },
  { value: 100, suffix: 'k+', label: 'Lines Shipped' },
  { value: 15, suffix: '+', label: 'GitHub Projects' },
  { value: 12, suffix: '', label: 'Open Source' },
]

export const BOOT_MESSAGES = [
  { text: '$ init --profile norit_qyqalla', class: '' },
  { text: '[OK] Loading identity module...', class: 'dim' },
  { text: '[OK] Mounting skill_tree.dat (12 entries)', class: 'dim' },
  { text: '[OK] Connecting to github.com/nor1t', class: 'dim' },
  { text: '> Profile ready. Launching interface...', class: 'cyan' },
]

export const THEME = {
  colors: {
    bg: '#0a0a0f',
    bgCard: '#12121a',
    border: '#1e1e2e',
    text: '#e0e0e8',
    muted: '#555570',
    green: '#00ff88',
    cyan: '#00d4ff',
    pink: '#ff2d6b',
    yellow: '#ffe14d',
  },
  fonts: {
    display: "'Orbitron', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
}