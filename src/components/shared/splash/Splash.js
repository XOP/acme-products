import Contain from "choom/lib/components/layout/Contain";
import Hold from "choom/lib/components/layout/Hold";

import styles from './splash.module.css';

const Splash = ({ children }) => {
  return (
    <Hold as="section" className={styles.root}>
      <Contain space="2">{children}</Contain>
    </Hold>
  );
};

export { Splash };
