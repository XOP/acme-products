import { NavLink as SmartLink } from "react-router-dom";
import clsx from "clsx";

import styles from "./navlink.module.css";

const NavLink = ({ children, to }) => {
  return (
    <SmartLink
      to={to}
      className={({ isActive }) =>
        clsx(styles.link, { [styles.__active]: isActive })
      }
    >
      {children}
    </SmartLink>
  );
};

export { NavLink };
