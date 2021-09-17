import styles from "@styles/Home.module.scss";
import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick} type="button">{text}</button>
    </div>
  );
};

export default Button;
