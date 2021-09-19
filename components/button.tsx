import { FC } from "react";
import styles from "@styles/Button.module.scss";

interface ButtonProps {
  text: string;
  type?: "play" | "settings" | "export";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, text, type = "export" }) => {
  const sub = type == 'play' ? 'play_arrow' : 'settings';

  return (
    <div onClick={onClick} className={`${styles.button} ${styles[type]}`}>
      {type != 'export' ? 
      <i className={'material-icons'}>{sub}</i>
      :
        'Export'
      }
    </div>
  );
};

export default Button;
