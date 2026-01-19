import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const PictureCard = ({ title, desc, url }: { title: string, desc: string, url: string }) => {
  return (
    <motion.div
      className="mx-auto max-w-md overflow-hidden rounded-xl bg-card shadow-md md:max-w-2xl my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="md:flex">
        <motion.div
          className="md:shrink-0 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="h-48 w-full object-cover md:h-full md:w-48 transition-transform duration-300"
            src={url}
            alt="Hobbies"
          />
        </motion.div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-blue-500 uppercase">Hobbies</div>
          <a href="#" className="mt-1 block text-lg leading-tight font-medium text-foreground hover:underline">
            {title}
          </a>
          <p className="mt-2 text-muted-foreground">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default PictureCard
