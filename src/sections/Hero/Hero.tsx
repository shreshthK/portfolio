import { motion } from 'framer-motion';
import styles from './HeroStyles.module.css';
import twitterIconDark from '../../assets/twitter-dark.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import githubIconDark from '../../assets/github-dark.svg';
import CV from '../../assets/shreshth resume.pdf';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { SectionCanvas } from '@/components/scene/SectionCanvas';
import HeroScene from './HeroScene';
import { useSceneConfig } from '@/lib/performance';

function Hero() {
  const sceneConfig = useSceneConfig();

  const twitterIcon = twitterIconDark;
  const linkedinIcon = linkedinIconDark;
  const githubIcon = githubIconDark;

  return (
    <motion.section
      id="hero"
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <SectionCanvas
        className={styles.canvas}
        config={sceneConfig}
        qualityPolicy={{ allowOnLow: true, disableInteractionOnLow: true }}
        fallback={<div className={styles.canvasFallback} aria-hidden />}
        camera={{ position: [0, 0.1, 5.8], fov: 48 }}
      >
        <HeroScene config={sceneConfig} />
      </SectionCanvas>

      <div className={styles.overlay} aria-hidden />

      <div className={styles.container}>
        <motion.div className={styles.content} variants={staggerContainer}>
          <motion.span className={styles.roleLabel} variants={fadeInUp}>
            Senior Software Developer
          </motion.span>

          <motion.h1 variants={fadeInUp} className={styles.name}>
            Shreshth
            <br />
            <span className={styles.nameAccent}>Kandari</span>
          </motion.h1>

          <motion.p className={styles.description} variants={fadeInUp}>
            Building enterprise-scale systems at <span className={styles.highlight}>Wabtec Corporation</span>.
            I design resilient full-stack workflows for supply chain and healthcare domains.
          </motion.p>

          <motion.div className={styles.metaRow} variants={fadeInUp}>
            <span>LOCATION // Fort Worth, TX</span>
            <span>EXPERIENCE // 8+ YEARS</span>
            <span>FOCUS // FULL-STACK SYSTEMS</span>
          </motion.div>

          <motion.div className={styles.actions} variants={fadeInUp}>
            <motion.a
              href={CV}
              download
              className={styles.primaryBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.prompt}>$</span>
              <span>download_resume --latest</span>
            </motion.a>

            <div className={styles.socialLinks}>
              <motion.a
                href="https://github.com/shreshthk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shreshth-kandari-7ab84959/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="" />
              </motion.a>
              <motion.a
                href="https://x.com/KandariShreshth"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="X"
              >
                <img src={twitterIcon} alt="" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
