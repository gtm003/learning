import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import styles from "./Algorithms.module.scss";

const example = [2, 5, 7, 3, 6, 4, 1];
const bubbleSort = (arr: Array<number>) => {
  return arr;
};

export const Algorithms = () => {
  const [step, setStep] = useState(1);
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.Algorithms}>
      <h3>Bubble Sort Algorithm</h3>
      <p>
        Сортировка пузырьком — это самый простой алгоритм сортировки. Он
        проходит по массиву несколько раз, на каждом этапе перемещая самое
        большое значение из неотсортированных в конец массива.
      </p>
      <p>{step} step</p>
      <button>Compare</button>
      <div className={styles.Example}>
        {example.map((item, itemIndex) => (
          <div
            key={item}
            className={classNames(styles.Example_item, {
              [styles.Example_item__highlighted]: index === itemIndex || index === itemIndex - 1,
            })}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
