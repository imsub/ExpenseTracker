/* eslint-disable react/prop-types */
import styles from "./PieLabel.module.css";
export default function PieLabel  (props) {

    const { name, color } = props;
    
    return (
        <div className={styles.pieLabel}>
            <span className={styles.labelColorBar} style={{backgroundColor: color}}></span>
            <span className={styles.labelText}>{name}</span>
        </div>
    );
}
