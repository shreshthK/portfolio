import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { projectEntries } from '@/data/projects';

const ProjectRow = ({ project, index }: { project: (typeof projectEntries)[number]; index: number }) => (
  <motion.div variants={fadeInUp} className="group border-b border-border/60 last:border-b-0">
    <div
      className="py-5 md:py-6 px-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6
      hover:bg-secondary/35 transition-colors duration-200"
    >
      <span className="font-mono text-[10px] tracking-wider text-accent w-6 shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3
        className="font-display font-bold text-foreground text-base sm:w-48 md:w-56 shrink-0
        group-hover:text-[var(--accent-warm)] transition-colors duration-200"
      >
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{project.description}</p>

      <div className="hidden lg:flex items-center gap-2 shrink-0">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono tracking-wide
              bg-secondary text-muted-foreground
              group-hover:bg-accent/15 group-hover:text-foreground
              transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide
              text-muted-foreground hover:text-[var(--accent-warm)] transition-colors duration-200"
          >
            <span>View</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide
              text-muted-foreground hover:text-[var(--accent-warm)] transition-colors duration-200"
          >
            <span>Source</span>
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
      className="py-20 md:py-24 border-t border-border/50 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-10 md:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"
          variants={fadeInUp}
        >
          <div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
              System Cards
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Projects</h2>
          </div>

        </motion.div>

        <motion.div
          className="hidden sm:flex items-center gap-6 px-2 pb-3 border-b border-border/60
            font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground"
          variants={fadeInUp}
        >
          <span className="w-6">#</span>
          <span className="w-48 md:w-56">Project</span>
          <span className="flex-1">Description</span>
          <span className="hidden lg:block w-40">Stack</span>
          <span className="w-20">Links</span>
        </motion.div>

        <motion.div variants={staggerContainer}>
          {projectEntries.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
