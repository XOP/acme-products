import Chip from "choom/lib/components/chip/Chip";
import Icon from "choom/lib/components/icon/Icon";
import Media from "choom/lib/components/layout/Media";

import styles from './tag.module.css';

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
