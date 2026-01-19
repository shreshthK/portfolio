import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface Hobby {
  title: string;
  description: string;
  icon: string;
  highlight?: string;
}

const hobbies: Hobby[] = [
  {
    title: "World of Warcraft",
    description: "Dedicated player with a proven track record in competitive raiding",
    icon: "🎮",
    highlight: "Top 30 US Guild"
  },
  {
    title: "Traveling",
    description: "Exploring new destinations and experiencing different cultures",
    icon: "✈️",
    highlight: "Adventure Seeker"
  },
  {
    title: "Cooking",
    description: "Creating culinary experiences and experimenting with new recipes",
    icon: "👨‍🍳",
    highlight: "Home Chef"
  }
];

const HobbyCard = ({ hobby }: { hobby: Hobby }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="relative p-6 rounded-2xl bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="text-4xl mb-4">{hobby.icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {hobby.title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-neutral-400 mb-3">
      {hobby.description}
    </p>
    {hobby.highlight && (
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
        {hobby.highlight}
      </span>
    )}
  </motion.div>
);

function Hobbies() {
  return (
    <motion.section
      id="hobbies"
      className="py-20 px-6 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div className="mb-12" variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Beyond the Code
        </h2>
        <p className="text-gray-600 dark:text-neutral-400">
          When I'm not coding, you'll find me...
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index} hobby={hobby} />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Hobbies;
