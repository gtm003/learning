import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import styles from "./ExpandedCard.module.scss";

interface IExpandedCardProps {
  title: ReactNode;
  content?: ReactNode;
}

export const ExpandedCard = ({ title, content }: IExpandedCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className={styles.ExpandedCard} onClick={() => setExpanded(!expanded)}>
      <div className={styles.ExpandedCard_title}>{title}</div>
      {content && (
        <div
          className={classNames(styles.ExpandedCard_content, {
            [styles.ExpandedCard_content__hidden]: expanded,
          })}
        >
          {content}
        </div>
      )}
    </div>
  );
};
