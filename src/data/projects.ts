export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projectEntries: ProjectEntry[] = [
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description: 'Online multiplayer tic-tac-toe with fast real-time rooms and game state sync.',
    tags: ['Game', 'Multiplayer', 'WebSocket'],
    link: 'http://44.195.152.236',
  },
  {
    id: 'snipit',
    title: 'Snip.it URL Shortener',
    description: 'A URL shortener with Bun + Hono backend and a responsive React frontend.',
    tags: ['Bun', 'Hono', 'React', 'API'],
    link: 'http://44.195.152.236:3000/',
  },
  {
    id: 'todo-tui',
    title: 'Todo TUI',
    description: 'A keyboard-driven terminal todo app built in Go for fast daily workflow capture.',
    tags: ['Go', 'TUI', 'CLI'],
    github: 'https://github.com/shreshthK/todo-tui',
  },
];
