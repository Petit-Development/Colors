import { FC } from "react";
import styles from "@styles/Button.module.scss";

interface ButtonProps {
  text: string;
  type?: "play" | "settings" | "export";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, text, type = "export" }) => {
  return (
    <div onClick={onClick} className={`${styles.button} ${styles.play}`}>
      {text}
    </div>
  );
};

export default Button;
