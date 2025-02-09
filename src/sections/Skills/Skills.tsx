import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import htmlIcon from '../../assets/tech-svg/HTML5.svg';
import cssIcon from '../../assets/tech-svg/CSS3.svg';
import jsIcon from '../../assets/tech-svg/JavaScript.svg';
import tsIcon from '../../assets/tech-svg/TypeScript.svg';
import nodeIcon from '../../assets/tech-svg/Node.js.svg';
import reactIcon from '../../assets/tech-svg/React.svg';
import angularIcon from '../../assets/tech-svg/Angular.svg';
import tailwindIcon from '../../assets/tech-svg/Tailwind CSS.svg';
import gitIcon from '../../assets/tech-svg/Git.svg';
import nextIcon from '../../assets/tech-svg/Next.js.svg';
import postgresIcon from '../../assets/tech-svg/PostgresSQL.svg';
import materialUiIcon from '../../assets/tech-svg/Material UI.svg';
import bootstrapIcon from '../../assets/tech-svg/Bootstrap.svg';
import awsIcon from '../../assets/tech-svg/AWS.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={jsIcon} skill="JavaScript" />
        <SkillList src={tsIcon} skill="TypeScript" />
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={angularIcon} skill="Angular" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={tailwindIcon} skill="Tailwind CSS" />
        <SkillList src={materialUiIcon} skill="Material UI" />
        <SkillList src={bootstrapIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={nodeIcon} skill="Node" />
        <SkillList src={nextIcon} skill="Next.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={gitIcon} skill="Git" />
        <SkillList src={postgresIcon} skill="PostgreSQL" />
        <SkillList src={awsIcon} skill="AWS" />

      </div>
    </section>
  );
}

export default Skills;