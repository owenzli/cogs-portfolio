import styles from "./ProjectDisplay.module.scss";
import ProjectIcon from "../../assets/icons/project-xs.svg";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";

export const padIndex = (index, total) =>
  String(index).padStart(Math.max(2, String(total).length), "0");

export default function ProjectDisplay({
  index,
  total,
  image,
  title,
  description,
  linkTitle,
  linkUrl,
  onBackClick,
  onNextClick,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title} />

        <nav>
          <div className={styles.navIndex}>{padIndex(index, total)}</div>
          <div className={styles.spacer} />
          <div className={styles.navButton} onClick={onBackClick}>
            <img src={ArrowRightIcon.src} alt="Back" />
          </div>
          <div className={styles.navButton} onClick={onNextClick}>
            <img src={ArrowLeftIcon.src} alt="Next" />
          </div>
        </nav>
      </div>

      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={linkUrl}
          target={linkUrl.indexOf("http") === 0 ? "_blank" : undefined}
        >
          {linkTitle}
          <img src={ProjectIcon.src} alt={linkTitle} />
        </a>
      </div>
    </div>
  );
}
