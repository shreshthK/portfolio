import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
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
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/10 dark:via-blue-500/10 dark:to-purple-500/20" />

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 mb-6">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <motion.a
            href="mailto:shreshth.kandari@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"
          variants={fadeInUp}
        />

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          variants={fadeInUp}
        >
          <motion.a
            href="https://github.com/shreshthk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/50 dark:bg-neutral-800/50 border border-gray-200/50 dark:border-neutral-700/50 hover:border-blue-500/50 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shreshth-kandari-7ab84959/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/50 dark:bg-neutral-800/50 border border-gray-200/50 dark:border-neutral-700/50 hover:border-blue-500/50 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.https://x.com/KandariShreshth"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/50 dark:bg-neutral-800/50 border border-gray-200/50 dark:border-neutral-700/50 hover:border-blue-500/50 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 dark:text-neutral-400"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Fort Worth, TX</span>
          </div>
          <span className="hidden sm:block text-gray-300 dark:text-neutral-600">•</span>
          <a
            href="mailto:shreshth.kandari@gmail.com"
            className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>shreshth.kandari@gmail.com</span>
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200/50 dark:border-neutral-700/50 text-center"
          variants={fadeInUp}
        >
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Designed & Built by Shreshth Kandari
          </p>
          <p className="text-xs text-gray-400 dark:text-neutral-600 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
