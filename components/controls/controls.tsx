import IconButton from "@components/buttons/iconButton";
import styles from '@styles/Controls.module.scss';

interface ControlsProps {
  onSettingsClicked: () => void;
}

const Controls: React.FC<ControlsProps> = ({}) => (
  <div className={styles.container}>
    <IconButton className={styles.play} icon="play" onClick={() => {}} />
  </div>
);

export default Controls;
