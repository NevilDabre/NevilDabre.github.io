import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import AchivementCard from "../../components/achievementCard/AchivementCard";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="achievement-cards-div">
          {bigProjects.projects.map(project => {
            return (
              <AchivementCard
                cardInfo={{
                  title: project.title,
                  description: project.subtitle,
                  image: project.image,
                  footer: project.footerLink
                }}
              />
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
