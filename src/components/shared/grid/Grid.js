import FlexUnit from "choom/lib/components/layout/FlexUnit";

import styles from "./grid.module.css";

const Grid = ({ children }) => {
  return <section className={styles.root}>{children}</section>;
};

const GridUnit = ({ children }) => {
  return (
    <FlexUnit grow="1" fluid align="stretch" className={styles.item}>
      {children}
    </FlexUnit>
  );
};

export { Grid, GridUnit };
