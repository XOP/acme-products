import clsx from "clsx";

import { Contain } from "choom-react";

import styles from "./shell.module.css";

const Shell = ({ children, className, ...rest }) => {
  return (
    <Contain className={clsx(styles.root, className)} {...rest}>
      {children}
    </Contain>
  );
};

export { Shell };
