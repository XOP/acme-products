import { Chip, Icon, Media } from "choom-react";

import styles from "./tag.module.css";

const Tag = ({ children, icon, title }) => {
  return (
    <Chip title={title} className={styles.root}>
      <Media space="0.25" start={<Icon size="inherit">{icon}</Icon>}>
        {children}
      </Media>
    </Chip>
  );
};

export { Tag };
