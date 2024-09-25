import React, { useRef, useState } from "react";
import ProjectIcon from "../assets/icons/project-xs.svg";
import { callSignal, randomInt } from "../helpers";
import styles from "./ProjectTile.module.css";

export default function ProjectTile({
  image,
  title,
  width = 300,
  top = "inital",
  left = "inital",
  projectOverlayIndex = 0,
}) {
  const ref = useRef();
  const [rotation, setRotation] = useState(randomInt(-10, 10));
  const [position, setPosition] = useState({ top, left });

  // TODO: Implement mouse interactions

  const handleClick = () => {
    callSignal("projectOverlay", projectOverlayIndex);
  };

  return (
    <div className={styles.container} style={position}>
      <div
        ref={ref}
        className={styles.tile}
        style={{ width, transform: `rotate(${rotation}deg)` }}
      >
        <img src={image} alt={title} />
      </div>
      <div className={styles.go}>
        <img onClick={handleClick} src={ProjectIcon.src} alt="Open" />
      </div>
    </div>
  );
}
