export const topics = ['All work', 'Mobile', 'Web', 'AI-assisted', 'Bots & APIs', 'Data'] as const
export type Topic = typeof topics[number]

export type Screenshot = { src: string; alt: string }

export type Project = {
  id: string
  title: string
  category: string
  description: string
  contribution: string
  details: string[]
  topics: Topic[]
  stack: string[]
  // Phone screenshots are shown side by side; anything else in a browser frame.
  screenshots: Screenshot[]
  mobile?: boolean
  caption: string
  links: { label: string; url: string }[]
  note?: string
}

export type Coursework = {
  title: string
  description: string
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: 'lut-lunch-mcp',
    title: 'LUT Lunch MCP',
    category: 'MCP server',
    description: 'An MCP server that lets AI assistants like Claude and ChatGPT answer questions about lunch on LUT’s Skinnarila campus: today’s menus, vegan or gluten-free options, and how often a dish has been served.',
    contribution: 'A personal project I built in four days with Claude Code as a pair programmer. I set the goals and constraints, approved each design, plan, and release, and tested every step.',
    details: [
      'Reads three restaurants from three different sources (two JSON APIs and an HTML page) and normalizes diet labels and the EU’s 14 allergens. Dishes without published allergens are never shown as safe.',
      'Runs as an npm package and as a free remote server on Cloudflare Workers. I redesigned the menu history data to fit the free plan’s CPU limit, cutting query time from about 30 ms to 2.3 ms.',
      'A daily collector saves every menu to a public dataset. 254 automated tests, and each release deploys automatically after a live check.',
    ],
    topics: ['AI-assisted', 'Bots & APIs', 'Data'],
    stack: ['TypeScript', 'MCP SDK', 'Cloudflare Workers'],
    screenshots: [{ src: 'lut-lunch-mcp.png', alt: 'LUT Lunch MCP README with an example conversation where Claude answers a question about vegan lunch options' }],
    caption: 'README preview · example conversation',
    links: [
      { label: 'View source', url: 'https://github.com/eerihyppanen/lut-lunch-mcp' },
      { label: 'npm package', url: 'https://www.npmjs.com/package/@eerihyppanen/lut-lunch-mcp' },
    ],
    note: 'Personal project, not affiliated with LUT or the restaurants.',
  },
  {
    id: 'chores',
    title: 'Chores',
    category: 'Android app',
    description: 'An app for the things you do every few days, weeks, or months, like washing the pillows or descaling the kettle. It shows what’s overdue, reminds you on the day something is due, and lets people who live together share chores and take turns.',
    contribution: 'A personal project I built with Claude Code as a pair programmer. Each feature went through a written spec, a step-by-step plan, tests written first, a check on a real phone, and an independent review.',
    details: [
      'Supabase backend where the database enforces security: row-level security keeps each household’s data private, and database functions make sure every household always has exactly one owner.',
      'Whose turn it is is never stored. It’s worked out from who did the chore last, so Undo and backdating update it automatically.',
      '365 unit and component tests, plus 66 tests against a real database with several users. Due dates are tested across month ends, leap years, and daylight saving changes.',
    ],
    topics: ['Mobile', 'AI-assisted'],
    stack: ['React Native (Expo)', 'TypeScript', 'Supabase'],
    screenshots: [
      { src: 'chores-templates.jpg', alt: 'Chores “Add a chore” screen with common chores such as vacuuming every week and descaling the kettle every month' },
      { src: 'chores-settings.jpg', alt: 'Chores settings with reminders and a shared household with options to invite someone or join a household' },
    ],
    mobile: true,
    caption: 'Screenshots from an Android phone',
    links: [{ label: 'Project page', url: 'https://github.com/eerihyppanen/chores-app' }],
    note: 'Source available on request.',
  },
  {
    id: 'guildhaven',
    title: 'Guildhaven',
    category: 'Pixel-art strategy game',
    description: 'A town management game. You build the town, raise named heroes, and send them on expeditions into dungeons, while on raid nights the dead march on your walls.',
    contribution: 'A solo project where I was the designer, director, and producer, and Claude Code wrote most of the code under my direction. I set the vision and the project’s rules, played the game throughout, and turned what felt wrong into concrete changes.',
    details: [
      'A deterministic simulation in plain TypeScript, separate from the graphics, so the same save always plays out the same way. Bots play 24 whole towns to the ending, and I used their numbers to balance the game.',
      'All art and music are made in code: buildings, tiles, and heroes are drawn from a fixed palette, and the music is played by a small synthesizer.',
      '644 automated tests, and all content lives in JSON files. A Windows desktop build with safe saves and backups is out with play testers.',
    ],
    topics: ['AI-assisted'],
    stack: ['TypeScript', 'Phaser 3', 'Electron'],
    screenshots: [{ src: 'guildhaven-town.png', alt: 'Guildhaven town at midday: pixel-art inns, a blacksmith, an alchemist, heroes walking the paths, and the build menu along the bottom' }],
    caption: 'In-game screenshot · the town at midday',
    links: [{ label: 'Project page', url: 'https://github.com/eerihyppanen/guildhaven-showcase' }],
    note: 'In a closed play test. Source available on request.',
  },
  {
    id: 'still',
    title: 'Still',
    category: 'Android app',
    description: 'An offline habit tracker for Android. You can see which habits need attention today and check one off without an account or an internet connection.',
    contribution: 'A personal project I built with OpenAI Codex. I chose the features and used each round of testing and feedback to decide what to simplify or improve.',
    details: [
      'All data stays on the phone in SQLite. The Android app has no internet permission at all.',
      'Schedule changes apply from the day they’re made, so earlier history keeps the schedule it had. Weekly goals and pauses are handled in streaks and reminders.',
      'A small Kotlin module schedules repeating Android reminders that keep working while the app is closed. 106 automated tests, with calendar tests run in four time zones.',
    ],
    topics: ['Mobile', 'AI-assisted'],
    stack: ['React Native (Expo)', 'TypeScript', 'SQLite'],
    screenshots: [
      { src: 'still-today.png', alt: 'Still Today screen with a morning walk, a weekly strength goal, and completed check-ins' },
      { src: 'still-insights.png', alt: 'Still weekly recap with scheduled check-ins, strength training progress, and the most consistent habit' },
    ],
    mobile: true,
    caption: 'Android screenshots with sample habits',
    links: [
      { label: 'View source', url: 'https://github.com/eerihyppanen/Still' },
      { label: 'Download APK', url: 'https://github.com/eerihyppanen/Still/releases/latest' },
    ],
  },
  {
    id: 'distributed-chat',
    title: 'Distributed Chat',
    category: 'Distributed system',
    description: 'A chat app split into four services: a REST API, a real-time message server, a service that tracks who is online, and a React client.',
    contribution: 'A university course project. I built all four services and the React client in TypeScript.',
    details: [
      'The API handles registration, JWT login, channels, and message history, with MongoDB for storage.',
      'A Socket.IO server delivers messages instantly and tells the presence service when users come and go.',
      'Users can chat in channels or send direct messages. Each service has its own health check, and one command starts them all.',
    ],
    topics: ['Web', 'Bots & APIs'],
    stack: ['TypeScript', 'Socket.IO', 'MongoDB'],
    screenshots: [{ src: 'distributed-chat.png', alt: 'Distributed Chat login screen running locally' }],
    caption: 'Login screen · local preview',
    links: [{ label: 'View source', url: 'https://github.com/eerihyppanen/Distributed_Project' }],
    note: 'University course project.',
  },
  {
    id: 'money-left-over',
    title: 'Money Left Over',
    category: 'Installable web app',
    description: 'A phone-first app for recurring bills and income, like rent, subscriptions, and salary. It shows what lands each month and how much is left over, works offline, and keeps all data on the device.',
    contribution: 'I built it with Claude Code as a pair programmer to solve my own problem: seeing all my subscriptions and bills in one place.',
    details: [
      'A bill on the 31st lands on the last day of shorter months and goes back to the 31st afterwards. Money is stored in whole cents to avoid rounding errors.',
      'Installs to the home screen and works offline. JSON backup and restore, and a CSV export that blocks spreadsheet formulas.',
      'Over 100 automated tests, including click-through tests of the whole app. GitHub Actions runs them before every deploy.',
    ],
    topics: ['Web', 'AI-assisted', 'Data'],
    stack: ['React', 'TypeScript', 'IndexedDB'],
    screenshots: [
      { src: 'money-overview.png', alt: 'Money Left Over overview: what is left over this month, with a bar split into spent, still due, and left over' },
      { src: 'money-upcoming.png', alt: 'Money Left Over in dark mode: payments due in the next 30 days, with dates, categories, and amounts' },
    ],
    mobile: true,
    caption: 'Screenshots with sample data',
    links: [
      { label: 'Try the demo', url: 'https://eerihyppanen.github.io/money-tracker/#/?sample' },
      { label: 'View source', url: 'https://github.com/eerihyppanen/money-tracker' },
    ],
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
    screenshots: [{ src: 'campus-food.png', alt: 'Campus Food live website showing campus restaurant lunch menus' }],
    caption: 'Live website · October 2026',
    links: [{ label: 'Visit website', url: 'https://campus-food-sigma.vercel.app/' }],
  },
  {
    id: 'training-log',
    title: 'Training Log',
    category: 'Android app',
    description: 'An Android app for logging workouts. Everything is stored on the phone, it keeps track of personal records, and it shows a progress chart for each exercise.',
    contribution: 'A personal project I built with AI assistance, covering workout logging, progress tracking, goals, and the Compose UI.',
    details: [
      'Kotlin and Jetpack Compose screens for workouts, history, analytics, and goals.',
      'Room stores workouts on the device; MVVM separates the interface from data and logic.',
      'Personal records are detected automatically, and routines can be saved as workout templates.',
    ],
    topics: ['Mobile', 'AI-assisted', 'Data'],
    stack: ['Kotlin', 'Jetpack Compose', 'Room'],
    screenshots: [
      { src: 'training-workout.png', alt: 'Training Log workout entry screen' },
      { src: 'training-progress.png', alt: 'Training Log exercise progress charts' },
    ],
    mobile: true,
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
    screenshots: [{ src: 'discord-source.png', alt: 'Discord Bot reminder command source on GitHub' }],
    caption: 'Source preview · reminder command',
    links: [{ label: 'View source', url: 'https://github.com/eerihyppanen/discordBot' }],
  },
]

export const coursework: Coursework[] = [
  {
    title: 'Statistics Portal',
    description: 'Public statistics about Finnish municipalities on a map and in charts. JavaScript, Leaflet, and Frappe Charts.',
    links: [{ label: 'Source', url: 'https://github.com/eerihyppanen/ProjectWorkWeb' }],
  },
  {
    title: 'Forum',
    description: 'A discussion forum with accounts, JWT login, and admin permissions. TypeScript, Express, and MongoDB.',
    links: [{ label: 'Source', url: 'https://github.com/eerihyppanen/RedditExercise' }],
  },
  {
    title: 'Operating systems in C',
    description: 'A new system call for the xv6 teaching operating system, and Unix tools: reverse, cat, grep, and run-length compression.',
    links: [
      { label: 'xv6', url: 'https://github.com/eerihyppanen/CT30A3370Project4' },
      { label: 'Unix tools', url: 'https://github.com/eerihyppanen/CT30A3370Project2' },
    ],
  },
]
