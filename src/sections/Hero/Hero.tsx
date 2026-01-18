import styles from './HeroStyles.module.css'
import heroImage from '../../assets/hero-img.png'
import twitterIconLight from '../../assets/twitter-light.svg'
import twitterIconDark from '../../assets/twitter-dark.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import CV from '../../assets/shreshth resume.pdf'
import { useTheme, Theme } from '../../common/ThemeContext'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'


function Hero() {
    const { theme } = useTheme();
    const twitterIcon = theme === Theme.Light ? twitterIconLight : twitterIconDark;
    const linkedinIcon = theme === Theme.Light ? linkedinIconLight : linkedinIconDark;
    const githubIcon = theme === Theme.Light ? githubIconLight : githubIconDark;

    return (
        <motion.section
            id="hero"
            className={styles.containerCustom + " " + styles.hero}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div className={styles.colorModeContainer} variants={scaleIn}>
                <div className={styles.imageWrapper}>
                    <div className={styles.glowRing}></div>
                    <img className={styles.heroImage} src={heroImage} alt="profile picture" />
                </div>
            </motion.div>
            <motion.div className={styles.info} variants={staggerContainer}>
                <motion.h1
                    variants={fadeInUp}
                    className={styles.gradientName}
                >
                    Shreshth Kandari
                </motion.h1>
                <motion.h2 variants={fadeInUp}>
                    Senior Software Developer
                </motion.h2>
                <motion.span variants={fadeInUp}>
                    <motion.a
                        href="https://github.com/shreshthk"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={githubIcon} alt="github icon" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/shreshthkandari/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </motion.a>
                    <motion.a
                        href="https://www.x.com/shreshthkandari/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={twitterIcon} alt="twitter icon" />
                    </motion.a>
                </motion.span>
                <motion.p className={styles.description} variants={fadeInUp}>
                    Senior Software Engineer at Wabtec Corporation, specializing in enterprise-scale supply chain management solutions. Bringing 8+ years of expertise across healthcare and supply chain domains, with a focus on developing robust, scalable applications.
                </motion.p>
                <motion.a href={CV} download variants={fadeInUp}>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-2">
                        Resume
                    </Button>
                </motion.a>
            </motion.div>
        </motion.section>
    )
}

export default Hero
