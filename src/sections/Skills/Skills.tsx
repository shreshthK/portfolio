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
import postgresIcon from '../../assets/tech-svg/PostgresSQL.svg';
import gitIcon from '../../assets/tech-svg/Git.svg';
import awsIcon from '../../assets/tech-svg/AWS.svg';
import javaIcon from '../../assets/tech-svg/Java.svg';
import dockerIcon from '../../assets/tech-svg/Docker.svg';
import kubernetesIcon from '../../assets/tech-svg/Kubernetes.svg';
import cicdIcon from '../../assets/tech-svg/CICD.svg';
import claudeIcon from '../../assets/tech-svg/Anthropic.svg';
import copilotIcon from '../../assets/tech-svg/Copilot.svg';
import aiIcon from '../../assets/tech-svg/AI.svg';
import sentryIcon from '../../assets/tech-svg/Sentry.svg';
import posthogIcon from '../../assets/tech-svg/PostHog.svg';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
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
    skills: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Java Spring Boot", icon: javaIcon },
      { name: "PostgreSQL", icon: postgresIcon },
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: awsIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "Git", icon: gitIcon },
      { name: "CI/CD", icon: cicdIcon },
    ]
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Claude AI", icon: claudeIcon },
      { name: "GitHub Copilot", icon: copilotIcon },
      { name: "LLM Integration", icon: aiIcon },
      { name: "AI Workflows", icon: aiIcon },
    ]
  },
  {
    title: "Tools & Monitoring",
    skills: [
      { name: "Sentry", icon: sentryIcon },
      { name: "PostHog", icon: posthogIcon }
    ]
  }
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05, y: -3 }}
    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all duration-200"
  >
    {skill.icon && (
      <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
    )}
    <span className="text-sm font-medium text-gray-700 dark:text-neutral-200">{skill.name}</span>
  </motion.div>
);

const SkillCategorySection = ({ category }: { category: SkillCategory }) => (
  <motion.div
    className="mb-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <motion.h3
      variants={fadeInUp}
      className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2"
    >
      <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
      {category.title}
    </motion.h3>
    <motion.div
      className="flex flex-wrap gap-3"
      variants={staggerContainer}
    >
      {category.skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </motion.div>
  </motion.div>
);

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <motion.div className="mb-12" variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Skills & Expertise</h2>
        <p className="text-gray-600 dark:text-neutral-400">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        {skillCategories.map((category, index) => (
          <SkillCategorySection key={index} category={category} />
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
