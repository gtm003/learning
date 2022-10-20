import React from "react";
import { ROUTES } from "../../constants/routes";
import styles from "./NavItem.module.scss";

export interface INavItemProps {
  name: string;
  path: string;
}

export const NavItem = ({ name, path }: INavItemProps) => {
  return (
    <a key={path} href={path} className={styles.NavItem}>
      {name}
    </a>
  );
};
