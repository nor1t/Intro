export const PROFILE_DATA = {
  name: 'NORIT QYQALLA',
  title: 'FULL-STACK ENGINEER',
  description: 'I build fast, scalable web and mobile apps. Passionate about clean code, data engineering, and turning ideas into real products.',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHqKSze1FmLDA/profile-displayphoto-scale_400_400/B4DZ20ILTKHIAg-/0/1776843536992?e=1781740800&v=beta&t=T5AZLectYzqsTJIvE5Hz1AHe81CWv73JAHkDPs3r3ic',
  social: [
    { icon: 'fa-brands fa-github', label: 'GitHub', url: 'https://github.com/nor1t', value: 'github.com/nor1t' },
    { icon: 'fa-brands fa-x-twitter', label: 'Twitter', url: 'https://x.com/NoritQy', value: '@NoritQy' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', url: 'https://www.linkedin.com/in/noriti/', value: 'LinkedIn' },
    { icon: 'fa-solid fa-envelope', label: 'Email', url: 'mailto:qnorit@gmail.com', value: 'qnorit@gmail.com' },
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
    description: 'A vibrant social music platform connecting enthusiasts and discovering new sounds together.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/KosVibe',
  },
  {
    name: 'LFGconnect',
    description: 'Connect with teammates and build communities around your favorite games and activities.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
    forks: 0,
    url: 'https://github.com/nor1t/LFGconnect',
  },
  {
    name: 'SEMAFORI',
    description: 'Smart traffic management system with real-time monitoring and optimization features.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 0,
    forks: 0,
    url: 'https://github.com/nor1t/SEMAFORI',
  },
  {
    name: 'ExpensesTracker',
    description: 'Intelligent expense tracking application for managing personal and shared finances.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 1,
    forks: 0,
    url: 'https://github.com/nor1t/ExpensesTracker',
  },
]

export const STATS = [
  { value: 3, suffix: '+', label: 'Years Coding' },
  { value: 47, suffix: 'k', label: 'Lines Shipped' },
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
