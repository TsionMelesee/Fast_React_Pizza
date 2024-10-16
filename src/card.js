import React from "react";
import ReactDOM from "react-dom/client";
import "./css.css";
const skills = [
  { skill: "Svelte", level: "beginner", color: "#FF3E00" },
  { skill: "React", level: "intermediate", color: "#61DAFB" },
  { skill: "Git", level: "advanced", color: "#F05032" },
  { skill: "GitHub", level: "advanced", color: "#181717" },
  { skill: "Web Design", level: "intermediate", color: "#E34F26" },
  { skill: "JavaScript", level: "intermediate", color: "#F7DF1E" },
  { skill: "HTML and CSS", level: "advanced", color: "#E44D26" },
];

function App() {
  return (
    <div className="container">
      <Avatar />
      <Bio />
      <div className="skillContainer">
        {skills.map((e) => (
          <Skill skill={`${e.skill} `} color={e.color} level={e.level} />
        ))}
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div className="avatar">
      <img src="download.jpg" alt="" />
    </div>
  );
}
function Bio() {
  return (
    <div className="bio">
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full stack web developer and teacher at udemy. I like to play board
        games, cook or to just enjoy the portuguese sun at the beach
      </p>
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <span>
        {level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
