import styles from './HeroStyles.module.css'
import heroImage from '../../assets/hero-img.png'
import themeIconLight from '../../assets/sun.svg'
import themeIconDark from '../../assets/moon.svg'
import twitterIconLight from '../../assets/twitter-light.svg'
import twitterIconDark from '../../assets/twitter-dark.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme, Theme } from '../../common/ThemeContext'
import { Button } from '@/components/ui/button'

function Hero() {
    const { theme, setTheme } = useTheme();
    const themeIcon = theme === Theme.Light ? themeIconLight : themeIconDark;
    const twitterIcon = theme === Theme.Light ? twitterIconLight : twitterIconDark;
    const linkedinIcon = theme === Theme.Light ? linkedinIconLight : linkedinIconDark;
    const githubIcon = theme === Theme.Light ? githubIconLight : githubIconDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImage} alt="profile picture" />
                <img className={styles.colorMode} src={themeIcon} alt="theme icon" onClick={() => {
                    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
                    console.log(theme);
                }} />
            </div>
            <div className={styles.info}>
                <h1>Shreshth kandari</h1>
                <h2>
                    Senior Software Developer
                </h2>
                <span>
                    <a href="https://github.com/shreshthk" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/shreshthkandari/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </a>
                    <a href="https://www.x.com/shreshthkandari/" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="twitter icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Senior Software Engineer at Wabtec Corporation, specializing in enterprise-scale supply chain management solutions. Bringing 8+ years of expertise across healthcare and supply chain domains, with a focus on developing robust, scalable applications.
                </p>
                <a href={CV} download>
                <Button className="bg-blue-600 hover:bg-blue-500">Resume</Button>
                </a>
            </div>
        </section>
    )
}

export default Hero
