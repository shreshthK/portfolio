import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
}

const projects: Project[] = [
  {
    title: 'Tic-Tac-Toe',
    description: 'Online multiplayer tic-tac-toe — play against friends or strangers in real time.',
    tags: ['Game', 'Multiplayer', 'Web'],
    link: 'http://44.195.152.236',
    year: '2025',
  },
  {
    title: 'Snip.it URL Shortener',
    description: 'A fast URL shortener with a Bun + Hono backend and React UI.',
    tags: ['URL Shortener', 'Hono', 'Bun', 'React'],
    link: 'http://44.195.152.236:3000/',
    year: '2026',
  },
];

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    variants={fadeInUp}
    className="group border-b border-border last:border-b-0"
  >
    <div className="py-5 md:py-6 px-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6
      hover:bg-secondary/30 transition-colors duration-200">
      {/* Index + Year */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="font-mono text-[10px] tracking-wider text-accent w-6">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[11px] tracking-wide text-muted-foreground w-12">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-foreground text-base sm:w-48 md:w-56 shrink-0
        group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="hidden lg:flex items-center gap-2 shrink-0">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-[10px] font-mono tracking-wide
              bg-secondary text-muted-foreground
              group-hover:bg-accent/10 group-hover:text-accent
              transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 shrink-0">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide
              text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            <span>View</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide
              text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            <span>Source</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div className="mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" variants={fadeInUp}>
          <div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/shreshthk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
              text-xs font-mono tracking-wider uppercase
              text-muted-foreground hover:text-accent
              transition-colors duration-200"
          >
            <span>More on GitHub</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Table header */}
        <motion.div
          className="hidden sm:flex items-center gap-6 px-2 pb-3 border-b border-border
            font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4">
            <span className="w-6">#</span>
            <span className="w-12">Year</span>
          </div>
          <span className="w-48 md:w-56">Project</span>
          <span className="flex-1">Description</span>
          <span className="hidden lg:block w-40">Stack</span>
          <span className="w-20">Links</span>
        </motion.div>

        {/* Project rows */}
        <motion.div variants={staggerContainer}>
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
