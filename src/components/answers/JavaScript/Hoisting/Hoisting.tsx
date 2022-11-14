import classNames from "classnames";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./Hoisting.module.scss";

const codeString = "console.log(a) // undefined; console.log(b); // ReferenceError: a is not defined;";
const codeString2 = "console.log(a) // undefined; console.log(b); // ReferenceError: a is not defined;";

export const Hoisting = () => {
  return (
    <div className={styles.Hoisting}>
      <p>
        Hoisting - это всплытие переменной или функции, объявленной через
        function declaration, наверх функциональной или глобальной области
        видимости
      </p>
      <pre>
        <code>
          console.log(a) // undefined;
          <br />
          console.log(b); // ReferenceError: a is not defined;
          <br />
          var a = 1;
          <br />
          const b = 2;
          <br />
        </code>
      </pre>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
