import clsx from "clsx";

import Contain from "choom/lib/components/layout/Contain";

import styles from "./shell.module.css";

const Shell = ({ children, className, ...rest }) => {
  return (
    <Contain className={clsx(styles.root, className)} {...rest}>
      {children}
    </Contain>
  );
};

export { Shell };
