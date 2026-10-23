export const topics = ['All work', 'Mobile', 'Web', 'AI-assisted', 'Bots & APIs', 'Data'] as const
export type Topic = typeof topics[number]

export type Project = {
  id: string
  title: string
  category: string
  description: string
  contribution: string
  details: string[]
  topics: Topic[]
  stack: string[]
  image: string
  imageAlt: string
  caption: string
  links: { label: string; url: string }[]
  note?: string
}

export const projects: Project[] = [
  {
    id: 'training-log',
    title: 'Training Log',
    category: 'Android application',
    description: 'An Android app for logging workouts. Everything is stored on the phone, it keeps track of personal records, and it shows a progress chart for each exercise.',
    contribution: 'A personal project I built with AI assistance, covering workout logging, progress tracking, goals, and the Compose UI.',
    details: [
      'Kotlin and Jetpack Compose screens for workouts, history, analytics, and goals.',
      'Room stores workouts on the device; MVVM separates the interface from data and logic.',
      'Personal records are detected automatically, and routines can be saved as workout templates.',
    ],
    topics: ['Mobile', 'AI-assisted', 'Data'],
    stack: ['Kotlin', 'Jetpack Compose', 'Room'],
    image: 'training-progress.png',
    imageAlt: 'Actual Training Log Android screen showing exercise progress charts',
    caption: 'Original app screenshots',
    links: [{ label: 'Explore project', url: 'https://github.com/eerihyppanen/TrainingAppReadme' }],
    note: 'Documentation is public. Source available on request.',
  },
  {
    id: 'discord-bot',
    title: 'Discord Bot',
    category: 'Discord bot',
    description: 'A bot for a Discord server. It sends reminders, shows game stats and leaderboards, and has an AI chat command.',
    contribution: 'I started from a simple welcome bot and, with AI assistance, added reminders, game and AI integrations, saved data, and tests.',
    details: [
      'Slash commands connect Discord to game statistics and Groq-powered AI chat.',
      'Saved reminders resume after a restart, with fallback delivery and retries.',
      'Queued JSON writes, graceful shutdown, and regression tests support reliable operation.',
    ],
    topics: ['Bots & APIs', 'AI-assisted'],
    stack: ['JavaScript', 'Node.js', 'Discord.js'],
    image: 'discord-source.png',
    imageAlt: 'Actual Discord Bot reminder command source on GitHub',
    caption: 'Source preview · reminder command',
    links: [{ label: 'View source', url: 'https://github.com/eerihyppanen/discordBot' }],
  },
  {
    id: 'statistics-portal',
    title: 'Statistics Portal',
    category: 'Interactive data visualization',
    description: 'A web app for exploring public statistics about Finnish municipalities on a map and in charts.',
    contribution: 'I connected the public APIs, built the map layers and charts, and designed the layout for desktop and mobile.',
    details: [
      'Statistics Finland data is presented through Leaflet maps and Frappe Charts.',
      'Municipality selection connects the map to charts, with line, bar, and pie views.',
      'Added SVG export, dark mode, and an in-app manual for a university web programming project.',
    ],
    topics: ['Web', 'Data', 'Bots & APIs'],
    stack: ['JavaScript', 'Leaflet', 'Frappe Charts'],
    image: 'statistics.png',
    imageAlt: 'Original Statistics Portal interface and built-in manual, with API data currently unavailable',
    caption: 'Original interface · API data unavailable',
    links: [{ label: 'View source', url: 'https://github.com/eerihyppanen/ProjectWorkWeb' }],
    note: 'Made for a course. The data APIs it used have since changed, so live data no longer loads.',
  },
  {
    id: 'forum',
    title: 'Forum',
    category: 'Full-stack web application',
    description: 'A discussion forum made for a university course, with user accounts, topics, and separate permissions for admins.',
    contribution: 'I built it step by step through course exercises: a TypeScript and Express REST API with a JavaScript front end.',
    details: [
      'Implemented registration, login, JWT authentication, and password hashing.',
      'MongoDB and Mongoose store users and discussion topics.',
      'API validation and route middleware support user and administrator actions.',
    ],
    topics: ['Web', 'Bots & APIs'],
    stack: ['TypeScript', 'Express', 'MongoDB'],
    image: 'forum.png',
    imageAlt: 'Original Forum registration interface running locally',
    caption: 'Registration screen · local preview',
    links: [{ label: 'View source', url: 'https://github.com/eerihyppanen/RedditExercise' }],
  },
  {
    id: 'campus-food',
    title: 'Campus Food',
    category: 'Web app',
    description: 'Lunch menus from the campus restaurants on one page. You can switch the day, change between Finnish and English, and show only vegan options.',
    contribution: 'I built the site with AI assistance. It collects the menus from the campus restaurants into one view.',
    details: [
      'Combines menus from campus restaurants in a single interface.',
      'Visitors can change the day, switch language, and show vegan choices.',
      'Built with Next.js and AI assistance, and deployed on Vercel.',
    ],
    topics: ['Web', 'AI-assisted'],
    stack: ['Next.js', 'React', 'Vercel'],
    image: 'campus-food.png',
    imageAlt: 'Campus Food live website showing campus restaurant lunch menus',
    caption: 'Live website · October 2026',
    links: [{ label: 'Visit website', url: 'https://campus-food-sigma.vercel.app/' }],
  },
]
