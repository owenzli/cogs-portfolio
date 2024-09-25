import XIcon from "../../assets/icons/x.svg";
import styles from "./CloseButton.module.css";

export default function CloseButton(props) {
  return (
    <button className={styles.closeButton} title="Close" {...props}>
      <img src={XIcon.src} alt="Close" />
    </button>
  );
}
