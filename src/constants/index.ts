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
    "Full-stack engineer in Kosovo passionate about building reliable, performant, enjoyable web and mobile apps, from intuitive UIs to the backend systems behind them.",
    "Frontend: React, React Native, TypeScript for responsive, accessible, maintainable apps. Backend: C#, Node.js, SQL for scalable APIs and data-driven systems. I value clean architecture, strong typing, and readable, maintainable code.",
    "Also into data engineering and ML, worked with Python and PySpark on data processing, analytics, and experimentation, and enjoy bringing data-driven features into real products. Every project is a chance to grow and explore new tech.",
    "Outside work, I experiment with new tools and frameworks, contribute to open source, and share knowledge with the local dev community. I believe the best software comes from people who keep learning, collaborate well, and take pride in building things that last.",
  ],
  highlights: [
    { icon: 'fa-solid fa-rocket', label: 'End-to-end shipping', value: 'From idea to production' },
    { icon: 'fa-solid fa-bolt', label: 'Performance-first', value: 'Fast by default' },
    { icon: 'fa-solid fa-shield-halved', label: 'Type-safe code', value: 'TS + C# all the way' },
    { icon: 'fa-solid fa-brain', label: 'Always learning', value: 'ML & data on the side' },
  ],
}

export const SKILLS = [
  { name: 'HTML', icon: 'fa-brands fa-html5', color: 'hex-yellow', level: 95 },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: 'hex-cyan', level: 92 },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'hex-yellow', level: 93 },
  { name: 'React', icon: 'fa-brands fa-react', color: 'hex-cyan', level: 91 },
  { name: 'React Native', icon: 'fa-brands fa-react', color: 'hex-cyan', level: 90 },
  { name: 'Python', icon: 'fa-brands fa-python', color: 'hex-green', level: 85 },
  { name: 'SQL', icon: 'fa-solid fa-database', color: 'hex-pink', level: 90 },
  { name: 'TypeScript', icon: 'fa-solid fa-code', color: 'hex-cyan', level: 90 },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: 'hex-green', level: 96 },
  { name: 'C#', icon: 'fa-solid fa-hashtag', color: 'hex-pink', level: 80 },
  { name: 'PySpark', icon: 'fa-solid fa-star', color: 'hex-yellow', level: 86 },
  { name: 'Machine Learning', icon: 'fa-solid fa-brain', color: 'hex-pink', level: 86 },
]

export const PROJECTS = [
  {
    name: 'SEMAFORI',
    tagline: 'Smart traffic management system',
    description: 'A real-time traffic monitoring and incident management system built with React, Python, Supabase, Leaflet, and Groq. It provides live traffic data, incident reporting, and route optimization for urban areas.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
    forks: 1,
    url: 'https://github.com/nor1t/SEMAFORI',
    tags: ['React', 'Computer Vision', 'Python Pipeline'],
    featured: true,
  },
  {
    name: 'KosVibe',
    tagline: 'Social music discovery platform',
    description: 'KosVibe is a mobile travel companion that helps locals and tourists discover the best of Kosovo. From traditional restaurants and community events to rural markets, cultural monuments, and mountain adventures.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 5,
    forks: 3,
    url: 'https://github.com/nor1t/KosVibe',
    tags: ['ReactNative', 'Node.js', 'WebSockets'],
    featured: true,
  },
  {
    name: 'LFGconnect',
    tagline: 'Gaming community & team finder',
    description: 'Connect with teammates and build communities around your favorite games and activities in your University Campus. Includes matchmaking, lobbies, and persistent group profiles with activity feeds.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
    forks: 0,
    url: 'https://github.com/nor1t/LFGconnect',
    tags: ['ReactNative', 'Firebase', 'Realtime'],
    featured: false,
  },
  {
    name: 'ExpensesTracker',
    tagline: 'Personal & shared finance tracker',
    description: 'Intelligent expense tracking application for managing personal finances. Supports multi-user ledgers, category insights, and monthly budgeting with visual breakdowns, helping users make new friends.',
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
    description: 'By creating an application that uses IoT sensors to monitor waste levels in bins and optimize collection routes, improving urban sanitation efficiency. The app provides simulated data on bin status.',
    language: 'HTML/CSS/JS',
    languageColor: '#c86830',
    stars: 1,
    forks: 0,
    url: 'https://github.com/nor1t/smartBINS.git',
    tags: ['HTML/CSS/JS', 'ETL', 'Data Engineering'],
    featured: false,
  },
  {
    name: 'WeatherAPP',
    tagline: 'Monitor waste levels in bins and optimize collection routes',
    description: 'A new design for a weather application that provides accurate and up-to-date weather information, including temperature, humidity, wind speed, and forecasts for multiple locations.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
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
    stars: 1,
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
    stars: 1,
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
    institution: 'University "Isa Boletini" in Mitrovica',
    degree: 'MSc in Cloud and Edge Computing',
    period: '2026 — Present',
    description: 'Pursuing advanced studies in cloud computing, edge computing, and distributed systems. Focused on building scalable, high-performance applications and exploring emerging technologies in the cloud ecosystem.',
    icon: 'fa-solid fa-graduation-cap',
    color: 'var(--cyan)',
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
