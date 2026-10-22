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
    description: 'Less time logging. More time lifting. A local-first workout tracker with personal records, progress charts, and reusable routines.',
    contribution: 'My personal Android project, built with AI assistance: workout logging, progress tracking, goals, and a Compose interface.',
    details: [
      'Kotlin and Jetpack Compose screens for workouts, history, analytics, and goals.',
      'Room stores workouts on the device; MVVM separates the interface from data and logic.',
      'Automatic personal records, exercise charts, and workout templates make progress easier to follow.',
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
    category: 'Community tools & automation',
    description: 'A useful companion for a Discord server. Persistent reminders, game statistics, leaderboards, and AI chat in one place.',
    contribution: 'Extended a welcome-bot starter with reminders, game and AI integrations, persistent storage, and regression tests.',
    details: [
      'Slash commands connect Discord to game statistics and Groq-powered AI chat.',
      'Saved reminders resume after a restart, with fallback delivery and retries.',
      'Queued JSON writes, graceful shutdown, and regression tests support reliable operation.',
    ],
    topics: ['Bots & APIs'],
    stack: ['JavaScript', 'Node.js', 'Discord.js'],
    image: 'discord-source.png',
    imageAlt: 'Actual Discord Bot reminder command source on GitHub',
    caption: 'Source preview · reminder command',
    links: [{ label: 'View source', url: 'https://github.com/eerihyppanen/discordBot' }],
    note: 'Includes an AI chat integration.',
  },
  {
    id: 'statistics-portal',
    title: 'Statistics Portal',
    category: 'Interactive data visualization',
    description: 'An explorable view of Finland. Municipal maps and configurable charts turn public statistics into something easier to understand.',
    contribution: 'Integrated public APIs, built the map layers and configurable charts, and designed the responsive interface.',
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
    note: 'Coursework archive. Upstream data endpoints need updating.',
  },
  {
    id: 'forum',
    title: 'Forum',
    category: 'Full-stack web application',
    description: 'A place to start a conversation. A university forum project with accounts, discussion topics, and role-based access.',
    contribution: 'Built a TypeScript and Express forum through university exercises, connecting a JavaScript interface to a REST API.',
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
    category: 'An everyday web tool',
    description: 'What’s for lunch? Campus restaurant menus together, with date navigation, Finnish and English, and a vegan filter.',
    contribution: 'Created a campus lunch website that brings restaurant menus into one searchable-by-day view.',
    details: [
      'Combines menus from campus restaurants in a single interface.',
      'Visitors can change the day, switch language, and show vegan choices.',
      'Built with Next.js and deployed on Vercel.',
    ],
    topics: ['Web'],
    stack: ['Next.js', 'React', 'Vercel'],
    image: 'campus-food.png',
    imageAlt: 'Campus Food live website showing campus restaurant lunch menus',
    caption: 'Live website · October 2026',
    links: [{ label: 'Visit website', url: 'https://campus-food-sigma.vercel.app/' }],
    note: 'More from my projects.',
  },
]
