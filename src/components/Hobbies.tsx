import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface Hobby {
  title: string;
  description: string;
  icon: string;
  highlight?: string;
  color: string;
}

const hobbies: Hobby[] = [
  {
    title: "World of Warcraft",
    description: "Dedicated player with a proven track record in competitive raiding environments",
    icon: "🎮",
    highlight: "Top 30 US Guild",
    color: "hsl(12 76% 61%)"
  },
  {
    title: "Traveling",
    description: "Exploring new destinations and experiencing different cultures around the world",
    icon: "✈️",
    highlight: "Adventure Seeker",
    color: "hsl(160 60% 40%)"
  },
  {
    title: "Cooking",
    description: "Creating culinary experiences and experimenting with flavors from various cuisines",
    icon: "👨‍🍳",
    highlight: "Home Chef",
    color: "hsl(45 90% 55%)"
  }
];

const HobbyCard = ({ hobby, index }: { hobby: Hobby; index: number }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -4 }}
    className="group relative"
  >
    <div className="relative p-6 md:p-8 rounded-2xl
      bg-card border border-border
      transition-all duration-300 ease-out
      hover:border-accent/20 hover:shadow-lg
      overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 30% 30%, ${hobby.color}, transparent 70%)` }}
      />

      {/* Index number */}
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
        0{index + 1}
      </span>

      {/* Icon */}
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {hobby.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
        {hobby.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {hobby.description}
      </p>

      {/* Highlight badge */}
      {hobby.highlight && (
        <span
          className="inline-block px-3 py-1.5 text-xs font-mono tracking-wide rounded-full
            transition-all duration-300"
          style={{
            background: `${hobby.color}15`,
            color: hobby.color,
            border: `1px solid ${hobby.color}30`
          }}
        >
          {hobby.highlight}
        </span>
      )}
    </div>
  </motion.div>
);

function Hobbies() {
  return (
    <motion.section
      id="hobbies"
      className="py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div className="mb-16 md:mb-20" variants={fadeInUp}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
            Life Outside Code
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Beyond the Screen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            When I'm not writing code, you'll find me pursuing these passions.
          </p>
        </motion.div>

        {/* Hobbies grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hobbies;
