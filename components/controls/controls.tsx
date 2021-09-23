import IconButton from "@components/buttons/iconButton";
import TextButton from "@components/buttons/textButton";
import styles from "@styles/Controls.module.scss";

interface ControlsProps {
  onSettingsClicked: () => void;
}
const Controls: React.FC<ControlsProps> = ({}) => (
  <div className={styles.container}>
    <IconButton className={styles.play} icon="play" onClick={() => {}} />
    <div className={styles.options}>
      <TextButton className={styles.export} text="Export" onClick={() => {}} />
      <IconButton
        className={styles.settings}
        icon="settings"
        onClick={() => {}}
      />
    </div>
  </div>
);

export default Controls;
