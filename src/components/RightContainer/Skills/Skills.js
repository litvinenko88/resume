import Wrapper from "../../UI/Wrapper";

import React from "react";
import ProgresBar from "../../UI/ProgresBar";

const SKILLS = [
  {
    title: "Html",
    completed: 90,
  },
  {
    title: "БЭМ",
    completed: 95,
  },
  {
    title: "Css",
    completed: 85,
  },
  {
    title: "Sass",
    completed: 90,
  },
  {
    title: "Адаптивная верстка",
    completed: 60,
  },
  {
    title: "JavaScript",
    completed: 50,
  },
  {
    title: "Ооп",
    completed: 70,
  },
  {
    title: "Асинхронный javaScript",
    completed: 70,
  },
  {
    title: "Promise",
    completed: 80,
  },
  {
    title: "Ajax",
    completed: 80,
  },
  {
    title: "Axios",
    completed: 70,
  },
  {
    title: "Webpack",
    completed: 60,
  },
  {
    title: "React",
    completed: 50,
  },
];

function Skills() {
  return (
    <React.Fragment>
      <Wrapper heading="Pro skills" />
      <ul>
        {SKILLS.map((item, idx) => (
          <ProgresBar key={idx} completed={item.completed} title={item.title} />
        ))}
      </ul>
    </React.Fragment>
  );
}
export default Skills;
