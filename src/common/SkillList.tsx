import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

function SkillList({ src, skill }: { src: string, skill: string }) {
    return (
      <motion.span
        variants={fadeInUp}
        whileHover={{ scale: 1.05, y: -2 }}
        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-shadow duration-200 w-28 h-28"
      >
        <img src={src} alt={`${skill} icon`} className="w-10 h-10 object-contain" />
        <p className="text-xs font-medium text-gray-700 dark:text-neutral-300 text-center">{skill}</p>
      </motion.span>
    );
  }

  export default SkillList;
