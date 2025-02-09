function SkillList({ src, skill }: { src: string, skill: string }) {
    return (
      <span>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;