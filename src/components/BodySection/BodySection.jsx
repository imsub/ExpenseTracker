
import styles from "./BodySection.module.css";
import Transactions from '../Transactions/Transactions';
import TopExpenses from '../TopExpenses/TopExpenses';

export default function BodySection() {
    return (
        <div className={styles.AppBody}>
            <Transactions />
            <TopExpenses />
        </div>
    );
}
