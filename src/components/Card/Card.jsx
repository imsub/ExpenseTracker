/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from "./Card.module.css";
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default function Card (props){
    //props
    const { text, value} = props;
    //states
    const [modalOn, setModalOn] = useState(false);
    //functions
    const toggleModal = () => setModalOn(!modalOn);

    return (
        <div className={styles.card}>
            <span className={styles.cardText}>
                <span>{text}: </span> 
                <span className={text === "Expenses" ? styles.cardTextRed : styles.cardTextGreen}>
                    ₹{value}
                </span>
            </span>
            <Button 
                text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
                background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
                buttonSize = "largeButton"
                clickFunction={toggleModal}
            />
            {modalOn ? 
                <Modal 
                toggleModal={toggleModal} 
                text={text === "Expenses" ? "Add Expense" : "Add Balance"}/> 
            :null
            }
        </div>
    );
}