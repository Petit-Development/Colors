import { FC } from "react";
import styles from "@styles/Button.module.scss";

interface ButtonProps {
  className?: string;
  icon: 'play' | 'settings';
  onClick?: () => void;
}

const IconButton: FC<ButtonProps> = ({ onClick, icon, className }) => {
  const sub = icon == "play" ? "play_arrow" : "settings";
  return (
    <div role='button' onClick={onClick} className={`${styles.button} ${className}`}>
      <i className={"material-icons"}>{sub}</i>
    </div>
  );
};

export default IconButton;
