import { NavLink as SmartLink } from "react-router-dom";

import clsx from "clsx";

import styles from "./navlink.module.css";

const NavLink = ({ children, to, modPlain = false }) => {
  return (
    <SmartLink
      to={to}
      className={({ isActive }) =>
        clsx(modPlain ? styles.link : styles.navlink, {
          [styles.__active]: isActive,
          [styles.__plain]: modPlain,
        })
      }
    >
      {children}
    </SmartLink>
  );
};

export { NavLink };
