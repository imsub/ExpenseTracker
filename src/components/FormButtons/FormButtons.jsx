/* eslint-disable react/prop-types */

import styles from "../Modal/Modal.module.css"
import Button from '../Button/Button';

export default function FormButtons (props) {

    const { text, toggleModal } = props;
    return (
        <div className={styles.formButtons}>
            <Button 
            text={text} 
            background="backgroundOrange" 
            buttonSize="largeButton"
            buttonType="submit"
            />
            <Button 
            text="Cancel" 
            background="backgroundWhite" 
            buttonSize="largeButton"
            clickFunction={toggleModal}
            />
        </div>
    );
}