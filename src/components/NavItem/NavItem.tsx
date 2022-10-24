import React from "react";
import styles from "./NavItem.module.scss";

export interface INavItemProps {
  name: string;
  path: string;
}

export const NavItem = ({ name, path }: INavItemProps) => {
  return (
    <a href={path} className={styles.NavItem}>
      {name}
    </a>
  );
};
