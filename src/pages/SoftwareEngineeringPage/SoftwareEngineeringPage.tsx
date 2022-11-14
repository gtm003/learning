import React from "react";
import { Algorithms } from "../../components/answers/SoftwareEngineering/Algorithms/Algorithms";
import { ExpandedCard } from "../../components/ExpandedCard/ExpandedCard";
import styles from "./SoftwareEngineeringPage.module.scss";

export const SoftwareEngineeringPage = () => {
  return (
    <div className={styles.SoftwareEngineeringPage}>
      <h1>Software Engineering</h1>
      <h3>Algorithms:</h3>
      <ol className={styles.SoftwareEngineeringPage_list}>
        <ExpandedCard
          title={
            <li>
              Explain at least one algorithm, how it works and complexity.
            </li>
          }
          content={<Algorithms />}
        />
      </ol>
      <h3>Design Patterns:</h3>
      <ol className={styles.SoftwareEngineeringPage_list}>
        <li>GRASP vs GOF patterns, what the difference?</li>
        <li>Why we need design patterns?</li>
        <li>Do you know any cons of using design patterns?</li>
        <li>
          Choose one design pattern, draw diagram for this pattern, explain how
          it works.
        </li>
      </ol>
      <h3>Semantic Versioning:</h3>
      <ol className={styles.SoftwareEngineeringPage_list}>
        <ExpandedCard
          title={<li>Explain what is SemVer.</li>}
          content={
            <p>
              Семантическое Версионирование (Semantic Versioning или же просто
              SemVer) — это стандарт для нумерации версий программ. И игр, они
              же тоже программы. По этому стандарту в номере версии должно быть
              три цифры: мажорная, минорная и патч — например, 3.13.7. Мажорная
              версия (major) — серьезные изменения. Например, переписали формат
              уровней, и теперь все новые уровни не будут загружаться в старой
              версии. Про такие изменения говорят, что они «без обратной
              совместимости». Минорная версия (minor) — обычные такие, рядовые
              изменения. Новое меню добавили, новый пак уровней, новые анимации,
              новый контент. Это изменения «с обратной совместимостью».
              Патч-версия (patch) — просто исправление багов или небольшие
              внутренние изменения. В самой игре ничего не меняется, большинство
              игроков даже не заметят, что игра обновилась.
            </p>
          }
        />

        <li>Do we need SemVer on every project?</li>
        <li>Explain brunch strategy on your project.</li>
        <li>
          Imagine the following situation … (ex. you need swap last commits
          between two brunches) How you can deal with it?
        </li>
        <li>How you can deal with merge conflicts?</li>
      </ol>
      <h3>Code Style:</h3>
      <ol className={styles.SoftwareEngineeringPage_list}>
        <li>Why we need code styles?</li>
        <li>Which code style guide you using in your current project?</li>
        <li>Explain what means DRY, KISS, YAGNI.</li>
        <li>How you use the in day to day activities?</li>
        <li>Explain what every character in SOLID means.</li>
      </ol>
      <h3>OOP v FP:</h3>
      <ol className={styles.SoftwareEngineeringPage_list}>
        <li>Main concepts of OOP.</li>
        <li>Main concepts of FP.</li>
        <li>FP vs OOP</li>
      </ol>
      <h3>Data Structures and Algorithms:</h3>
      <ol className={styles.SoftwareEngineeringPage_list}>
        <li>Binary Tree vs Search Tree.</li>
        <li>
          Stack vs Queue. Explain basic API of both data structures and how they
          work.
        </li>
        <li>List vs Linked list. Explain basic API and how it they work.</li>
        <li>Array vs List. What the difference?</li>
        <li>Hash-table, how it works? Explain basic api, collisions.</li>
        <li>How to measure algorithm complexity? The big O notation.</li>
      </ol>
    </div>
  );
};
