/* eslint-disable react/prop-types */

import styles from "./HeaderSection.module.css";
import Card from '../Card/Card';
import PieChartComp from '../PieChart/PieChart';

export default function HeaderSEction (props){
    const { balance, expenses } = props;
    return (
        <header className={styles.header}>
            <Card text="Wallet balance" value={balance}/>
            <Card text="Expenses" value={expenses}/>
            <PieChartComp />
        </header>
    );
}