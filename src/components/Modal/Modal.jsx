/* eslint-disable react/prop-types */
import styles from "./Modal.module.css"
import ModalForm from './ModalForm';

export default function Modal(props) {

    const { toggleModal, text, existingData } = props;

    return (
        <div className={styles.Modal} onClick={toggleModal}>
            <div className={styles.modalBody} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHead}>{text}</div>
                <ModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
            </div>
        </div>
    );
}