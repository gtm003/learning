import React from "react";

const TOPICS = [
  "Module #1: Software Engineering",
  "Module #2: HTML/CSS",
  "Module #3: JavaScript",
  "Module #4: Framework React",
];

export const HomePage = () => {
  return (
    <div>
      Home Page
      <ul>
        {TOPICS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
