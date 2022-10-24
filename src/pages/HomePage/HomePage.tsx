import React from "react";
import { NavItem } from "../../components/NavItem/NavItem";
import { ROUTES } from "../../constants/routes";
import styles from "./HomePage.module.scss";
import { FilesUploader } from "../../components/FilesUploader/FilesUploader";

const TOPICS = [
  "Module #1: Software Engineering",
  "Module #2: HTML/CSS",
  "Module #3: JavaScript",
  "Module #4: Framework React",
];

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      {Object.values(ROUTES).map((page) => (
        <NavItem key={page.name} name={page.name} path={page.path} />
      ))}
    </div>
  );
};

export default HomePage;
