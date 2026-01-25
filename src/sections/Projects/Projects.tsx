import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  year: string;
}

const projects: Project[] = [
  {
    title: 'Tic-Tac-Toe',
    description: 'An online multiplayer tic-tac-toe game. Play against friends or strangers in real time in your browser.',
    tags: ['Game', 'Multiplayer', 'Web'],
    link: 'http://44.195.152.236',
    year: '2025',
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = project.featured;

  return (
    <motion.article
      variants={fadeInUp}
      className={`group relative ${isFeatured ? 'md:col-span-2' : ''}`}
    >
      <div className={`
        relative overflow-hidden rounded-2xl
        bg-card border border-border
        transition-all duration-500 ease-out
        hover:border-accent/30 hover:shadow-lg
        ${isFeatured ? 'p-8 md:p-12' : 'p-6 md:p-8'}
      `}>
        {/* Year badge */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <span className="font-mono text-xs tracking-wider text-muted-foreground">
            {project.year}
          </span>
        </div>

        {/* Index number - editorial style */}
        <div className="mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
            Project {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className={`
          font-display font-bold text-foreground mb-4
          group-hover:text-accent transition-colors duration-300
          ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
        `}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`
          text-muted-foreground leading-relaxed mb-6
          ${isFeatured ? 'text-base md:text-lg max-w-2xl' : 'text-sm md:text-base'}
        `}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-mono tracking-wide
                bg-secondary text-secondary-foreground rounded-full
                transition-colors duration-200
                group-hover:bg-accent/10 group-hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium
                text-foreground hover:text-accent transition-colors duration-200"
            >
              <span>View Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium
                text-foreground hover:text-accent transition-colors duration-200"
            >
              <span>Source</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Decorative accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[hsl(160_60%_40%)] to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.article>
  );
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div className="mb-16 md:mb-20" variants={fadeInUp}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Projects & Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of personal projects and contributions to open source projects
          </p>
        </motion.div>

        {/* Projects grid - asymmetric layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* View more hint */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
        >
          <a
            href="https://github.com/shreshthk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3
              border border-border rounded-full
              text-sm font-medium text-foreground
              hover:border-accent hover:text-accent
              transition-all duration-300"
          >
            <span>More on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
