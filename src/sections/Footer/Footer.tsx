import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import githubIconDark from '../../assets/github-dark.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import twitterIconDark from '../../assets/twitter-dark.svg';

function Footer() {
  const githubIcon = githubIconDark;
  const linkedinIcon = linkedinIconDark;
  const twitterIcon = twitterIconDark;

  return (
    <motion.footer
      id="footer"
      className="border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Compact CTA strip */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        variants={fadeInUp}
      >
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">
            Let's Work Together
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <motion.a
          href="mailto:shreshth.kandari@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3
            bg-accent text-white
            font-mono text-xs tracking-wider uppercase
            transition-all duration-300
            hover:bg-accent/80"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Send a Message</span>
        </motion.a>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-border"
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono tracking-wide">
            &copy; {new Date().getFullYear()} Shreshth Kandari
          </p>

          {/* Social links */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/shreshthk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="" className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreshth-kandari-7ab84959/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="" className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://x.com/KandariShreshth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Twitter"
            >
              <img src={twitterIcon} alt="" className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:shreshth.kandari@gmail.com"
            className="text-xs text-muted-foreground hover:text-accent transition-colors duration-200 font-mono tracking-wide"
          >
            shreshth.kandari@gmail.com
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
