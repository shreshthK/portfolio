import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Shreshth Kandari. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;