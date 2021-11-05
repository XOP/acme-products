import styles from "./footlink.module.css";

const FootLink = ({ children, href, title }) => {
  return (
    <a href={href} title={title} className={styles.link}>
      {children}
    </a>
  );
};

export { FootLink };
