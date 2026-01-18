import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { useTheme, Theme } from '@/common/ThemeContext';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import twitterIconLight from '../../assets/twitter-light.svg';
import twitterIconDark from '../../assets/twitter-dark.svg';

function Footer() {
  const { theme } = useTheme();
  const githubIcon = theme === Theme.Light ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === Theme.Light ? linkedinIconLight : linkedinIconDark;
  const twitterIcon = theme === Theme.Light ? twitterIconLight : twitterIconDark;

  return (
    <motion.footer
      id="footer"
      className="py-12 px-4 border-t border-gray-200/50 dark:border-neutral-700/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">Get in Touch</h3>
          <a
            href="mailto:shreshth.kandari@gmail.com"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            shreshth.kandari@gmail.com
          </a>
          <p className="text-muted-foreground mt-1">Fort Worth, TX</p>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            href="https://github.com/shreshthk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shreshthkandari/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.x.com/shreshthkandari/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
          </motion.a>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Shreshth Kandari. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
