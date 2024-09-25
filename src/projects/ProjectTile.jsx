import React, { useRef, useState } from "react";
import ProjectIcon from "../assets/icons/project-xs.svg";
import { callSignal, getClickOffset, randomInt } from "../helpers/helpers";
import styles from "./ProjectTile.module.css";

export default function ProjectTile({
  image,
  title,
  width = 400,
  top = "inital",
  left = "inital",
  projectOverlayIndex = 0,
}) {
  const ref = useRef();
  const [rotation, setRotation] = useState(randomInt(-10, 10));
  const [position, setPosition] = useState({ top, left });
  const [isDragging, setIsDragging] = useState(false);
  const clickPosition = useRef({ x: 0, y: 0 });

  const handleClick = () => {
    callSignal("projectOverlay", projectOverlayIndex);
  };

  return (
    <div className={styles.container} style={position}>
      <div
        ref={ref}
        className={styles.tile}
        style={{ width, transform: `rotate(${rotation}deg)` }}
        onMouseEnter={() => setRotation((prev) => prev + randomInt(-5, 5))}
        onMouseLeave={() => setRotation((prev) => prev + randomInt(-5, 5))}
        onMouseDown={null}
        onMouseMove={null}
        onMouseUp={null}
      >
        <img src={image} alt={title} />
      </div>
      <div className={styles.go}>
        <img onClick={handleClick} src={ProjectIcon.src} alt="Open" />
      </div>
    </div>
  );
}
