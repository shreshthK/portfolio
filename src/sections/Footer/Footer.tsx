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
      className="relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <motion.a
            href="mailto:shreshth.kandari@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4
              bg-accent text-accent-foreground
              font-medium rounded-full
              shadow-lg hover:shadow-xl
              transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 4px 14px hsl(12 76% 61% / 0.25)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send a Message</span>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-16 h-px bg-border mx-auto mb-16"
          variants={fadeInUp}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={fadeInUp}
        >
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Fort Worth, TX</span>
            </div>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="mailto:shreshth.kandari@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>shreshth.kandari@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/shreshthk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border
                hover:border-accent/30 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shreshth-kandari-7ab84959/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border
                hover:border-accent/30 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="https://x.com/KandariShreshth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border
                hover:border-accent/30 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <img src={twitterIcon} alt="" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-border text-center"
          variants={fadeInUp}
        >
          <p className="text-sm text-muted-foreground">
            Designed & Built by{' '}
            <span className="text-foreground font-medium">Shreshth Kandari</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
