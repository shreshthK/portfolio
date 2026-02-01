import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// Icons
import jsIcon from '../../assets/tech-svg/JavaScript.svg';
import tsIcon from '../../assets/tech-svg/TypeScript.svg';
import reactIcon from '../../assets/tech-svg/React.svg';
import angularIcon from '../../assets/tech-svg/Angular.svg';
import htmlIcon from '../../assets/tech-svg/HTML5.svg';
import cssIcon from '../../assets/tech-svg/CSS3.svg';
import tailwindIcon from '../../assets/tech-svg/Tailwind CSS.svg';
import nodeIcon from '../../assets/tech-svg/Node.js.svg';
import bunIcon from '../../assets/tech-svg/Bun.svg';
import honoIcon from '../../assets/tech-svg/Hono.svg';
import expressIcon from '../../assets/tech-svg/Express.svg';
import postgresIcon from '../../assets/tech-svg/PostgresSQL.svg';
import gitIcon from '../../assets/tech-svg/Git.svg';
import awsIcon from '../../assets/tech-svg/AWS.svg';
import javaIcon from '../../assets/tech-svg/Java.svg';
import dockerIcon from '../../assets/tech-svg/Docker.svg';
import cicdIcon from '../../assets/tech-svg/CICD.svg';
import claudeIcon from '../../assets/tech-svg/Anthropic.svg';
import copilotIcon from '../../assets/tech-svg/Copilot.svg';
import aiIcon from '../../assets/tech-svg/AI.svg';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive, performant user interfaces",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Angular", icon: angularIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "Tailwind", icon: tailwindIcon },
    ]
  },
  {
    title: "Backend",
    description: "Scalable server-side architecture",
    skills: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Bun", icon: bunIcon },
      { name: "Hono", icon: honoIcon },
      { name: "Express", icon: expressIcon },
      { name: "Java Spring Boot", icon: javaIcon },
      { name: "PostgreSQL", icon: postgresIcon },
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure and deployment automation",
    skills: [
      { name: "AWS", icon: awsIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Git", icon: gitIcon },
      { name: "CI/CD", icon: cicdIcon },
    ]
  },
  {
    title: "AI & Automation",
    description: "Leveraging AI to enhance development",
    skills: [
      { name: "Claude AI", icon: claudeIcon },
      { name: "GitHub Copilot", icon: copilotIcon },
      { name: "LLM Integration", icon: aiIcon },
      { name: "AI Workflows", icon: aiIcon },
    ]
  }
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -2 }}
    className="group flex items-center gap-2.5 px-4 py-2.5
      bg-secondary/50 hover:bg-secondary
      border border-transparent hover:border-accent/20
      rounded-lg transition-all duration-200"
  >
    {skill.icon && (
      <img
        src={skill.icon}
        alt=""
        className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
      />
    )}
    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
      {skill.name}
    </span>
  </motion.div>
);

const SkillCategorySection = ({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.div
    className="group"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <div className="mb-5">
      {/* Category number */}
      <motion.span
        variants={fadeInUp}
        className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-2 block"
      >
        0{index + 1}
      </motion.span>

      {/* Category title */}
      <motion.h3
        variants={fadeInUp}
        className="text-xl font-display font-bold text-foreground mb-1"
      >
        {category.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        className="text-sm text-muted-foreground"
      >
        {category.description}
      </motion.p>
    </div>

    {/* Skills grid */}
    <motion.div
      className="flex flex-wrap gap-2"
      variants={staggerContainer}
    >
      {category.skills.map((skill, i) => (
        <SkillBadge key={i} skill={skill} />
      ))}
    </motion.div>
  </motion.div>
);

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24 md:py-32 bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div className="mb-16 md:mb-20" variants={fadeInUp}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technologies and tools I use to bring ideas to life, from concept to production.
          </p>
        </motion.div>

        {/* Skills grid - 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category, index) => (
            <SkillCategorySection key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
