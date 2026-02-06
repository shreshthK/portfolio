import styles from './HeroStyles.module.css'
import twitterIconLight from '../../assets/twitter-light.svg'
import twitterIconDark from '../../assets/twitter-dark.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import CV from '../../assets/shreshth resume.pdf'
import { useTheme, Theme } from '../../common/ThemeContext'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'


function Hero() {
    const { theme } = useTheme();
    const twitterIcon = theme === Theme.Light ? twitterIconLight : twitterIconDark;
    const linkedinIcon = theme === Theme.Light ? linkedinIconLight : linkedinIconDark;
    const githubIcon = theme === Theme.Light ? githubIconLight : githubIconDark;

    return (
        <motion.section
            id="hero"
            className={styles.hero}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Background decoration */}
            <div className={styles.bgDecoration} />

            <div className={styles.container}>
                {/* Text content - full width editorial */}
                <motion.div className={styles.content} variants={staggerContainer}>
                    {/* Role label */}
                    <motion.span
                        className={styles.roleLabel}
                        variants={fadeInUp}
                    >
                        Senior Software Developer
                    </motion.span>

                    {/* Name - Massive, editorial */}
                    <motion.h1 variants={fadeInUp} className={styles.name}>
                        Shreshth
                        <br />
                        <span className={styles.nameAccent}>Kandari</span>
                    </motion.h1>

                    {/* Thin rule */}
                    <motion.div className={styles.rule} variants={fadeInUp} />

                    {/* Description */}
                    <motion.p className={styles.description} variants={fadeInUp}>
                        Building enterprise-scale applications at <span className={styles.highlight}>Wabtec Corporation</span>.
                        8+ years crafting robust, scalable solutions across healthcare and supply chain domains.
                    </motion.p>

                    {/* Info row - editorial metadata */}
                    <motion.div className={styles.infoRow} variants={fadeInUp}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Location</span>
                            <span className={styles.infoValue}>Fort Worth, TX</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Experience</span>
                            <span className={styles.infoValue}>8+ Years</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Focus</span>
                            <span className={styles.infoValue}>Full-Stack Development</span>
                        </div>
                    </motion.div>

                    {/* CTA + Social */}
                    <motion.div className={styles.actions} variants={fadeInUp}>
                        <motion.a
                            href={CV}
                            download
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Download Resume</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </motion.a>

                        <div className={styles.socialLinks}>
                            <motion.a
                                href="https://github.com/shreshthk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                whileHover={{ scale: 1.1 }}
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
                                whileHover={{ scale: 1.1 }}
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
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Twitter"
                            >
                                <img src={twitterIcon} alt="" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <span>Scroll</span>
                <div className={styles.scrollLine} />
            </motion.div>
        </motion.section>
    )
}

export default Hero
