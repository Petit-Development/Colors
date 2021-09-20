import { FC } from "react";
import styles from "@styles/Button.module.scss";

interface ButtonProps {
  text: string;
  /**
   * Whether this is an icon button
   */
  className?: string;
  onClick?: () => void;
}

const TextButton: FC<ButtonProps> = ({ onClick, text, className }) => {
  return (
    <div onClick={onClick} className={`${styles.button} ${className}`}>
      {text}
    </div>
  );
};

export default TextButton;
