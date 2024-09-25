import React, { useEffect, useState } from "react";
import CloseButton from "./components/CloseButton";
import ProjectDisplay from "./components/ProjectDisplay";
import styles from "./ProjectsOverlay.module.css";
import { ProjectList } from "./Projects";
import { createSignal } from "../helpers";

export default function ProjectsOverlay() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const button = document.getElementById("projects-button");
    button.addEventListener("click", () => {
      setOpen(true);
    });

    createSignal("projectOverlay", (index) => {
      setOpen(true);
      setIndex(index);
    });
  }, []);

  if (!open) return null;

  const activeProject = ProjectList[index];

  return (
    <div className={styles.overlay}>
      <CloseButton onClick={() => setOpen(false)} />
      <ProjectDisplay
        index={index + 1}
        total={ProjectList.length}
        image={activeProject.image}
        title={activeProject.title}
        description={activeProject.description}
        linkTitle={activeProject.linkTitle}
        linkUrl={activeProject.linkUrl}
        onBackClick={() => console.log('go back')}
        onNextClick={() => console.log('go next')}
      />
    </div>
  );
}
