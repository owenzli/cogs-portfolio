import React, { useRef, useState } from "react";
import ProjectIcon from "../assets/icons/project-xs.svg";
import { getClickOffset, randomInt } from "../helpers/helpers";
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

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    clickPosition.current = getClickOffset(event, ref);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      event.preventDefault();
      const { x, y } = clickPosition.current;
      setPosition({
        top: event.clientY - y,
        left: event.clientX - x,
      });
    }
  };

  const handleMouseUp = (event) => {
    if (isDragging) {
      event.preventDefault();
      setIsDragging(false);
      setRotation(randomInt(-10, 10));
    }
  };

  const handleClick = () => {
    window.projectOverlaySignal(projectOverlayIndex);
  };

  return (
    <div className={styles.container} style={position}>
      <div
        ref={ref}
        className={styles.tile}
        style={{ width, transform: `rotate(${rotation}deg)` }}
        onMouseEnter={() => setRotation((prev) => prev + randomInt(-5, 5))}
        onMouseLeave={() => setRotation((prev) => prev + randomInt(-5, 5))}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img src={image} alt={title} />
      </div>
      <div className={styles.go}>
        <img onClick={handleClick} src={ProjectIcon.src} alt="Open" />
      </div>
    </div>
  );
}
