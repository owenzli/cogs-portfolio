import React, { useEffect, useState } from "react";
import CloseButton from "./components/CloseButton";
import ProjectDisplay from "./components/ProjectDisplay";
import styles from "./ProjectsOverlay.module.css";
import { ProjectList } from "./Projects";

export default function ProjectsOverlay() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const button = document.getElementById("projects-button");
    button.addEventListener("click", () => {
      setOpen(true);
    });

    window.projectOverlaySignal = (index) => {
      setOpen(true);
      setIndex(index);
    };
  }, []);

  if (!open) return null;

  const activeProject = ProjectList[index];
  const changeIndex = (delta) =>
    setIndex((prev) => {
      const newIndex = prev + delta;
      if (newIndex >= ProjectList.length) {
        return 0;
      }
      if (newIndex < 0) {
        return ProjectList.length - 1;
      }
      return newIndex;
    });

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
        onBackClick={() => changeIndex(-1)}
        onNextClick={() => changeIndex(+1)}
      />
    </div>
  );
}
