import React from "react";
import { Hoisting } from "../../components/answers/JavaScript/Hoisting/Hoisting";
import { Algorithms } from "../../components/answers/SoftwareEngineering/Algorithms/Algorithms";
import { ExpandedCard } from "../../components/ExpandedCard/ExpandedCard";
import styles from "./JavaScriptPage.module.scss";

export const JavaScriptPage = () => {
  return (
    <div className={styles.JavaScriptPage}>
      <h1>JavaScript</h1>
      <ol className={styles.JavaScriptPage_list}>
        <ExpandedCard
          title={
            <li>
              Hosting, привести примеры всплытия.
            </li>
          }
          content={<Hoisting />}
        />
        <li>Closures, be able to create an example of it in code</li>
        <li>Have solid understand why we use closures, how it is connected with encapsulation and IIFE</li>
        <li>This keyword – basic idea, and its use in common and arrow function with examples</li>
        <li>New keyword. How it works</li>
        <li>== comparison algorithm</li>
        <li>Priority of operations with example</li>
        <li>Have solid understanding of types auto conversion, what is unary, binary, ternary operations.</li>
        <li>Type of vs instance of show difference in examples.</li>
        <li>Prototype inheritance, props and cons, be able to realize</li>
        <li>Primitive vs reference types with example. Pass by value vs pass by reference</li>
        <li>What is Promise, why should we use it. Promise vs async await, show similarity in examples</li>
        <li>Fetch api</li>
        <li>Basic DOM api: update, create, remove classes, attributes. Navigate through DOM tree. Be able to write recursive function to go throught DOM tree.</li>
        <li>How to add events. Capturing / Bubbling. Event delegation pattern. PreventDefault. Stop propagation. Stop propagation immediate.</li>
        <li>Differences between click, mousedown, mouseup, mouseover / mouseenter.</li>
        <li>BOM – navigation , history, location, LocalStorage, SessionStorage</li>
        <li>Even Loop with examples</li>
        <li>For In vs For Of. What Is Symbol.Iterator. Create custom interator</li>
        <li>Interators vs Generators – at least basic knowledge</li>
        <li>Object descriptors. How for in loop works</li>
        <li>Rest operator (…) destruturing object properties</li>
        <li>Js Errors. Throw, catch, create custom errors.</li>
        <li>Immutable types, what it is and how it works under the hood.</li>
        <li>Critical rendering path</li>
        <li>RAF</li>
        <li>Function patterns: callback, memo, currying, chaining, IIFE, pipe</li>
        <li>How to create private property in js class</li>
        <li>Private property using WeakMap pattern</li>
        <li>Basics about drag/drop api</li>
      </ol>
    </div>
  );
};
