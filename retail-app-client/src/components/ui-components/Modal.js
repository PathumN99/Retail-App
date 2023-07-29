import ModalCSS from "../../style/Modal.module.css";

export default function Modal(props) {

    function handleCancel() {
        props.display(false)       
    }

    function onConfirmation() {
        props.onConfirm();
        props.display(false);
    }

    return (
        <div className={ModalCSS.modalBackground}>
            <div className={ModalCSS.modalContainer}>
                <div className={ModalCSS.modalTitle}>
                    <h2>{props.message}</h2>
                </div>                
                <div className={ModalCSS.modalFooter}>
                    <button className={ModalCSS.cancelBtn}onClick={handleCancel}>Cancel</button>
                    <button className={ModalCSS.confirmBtn} onClick={onConfirmation}>Confirm</button>
                </div>
            </div>
        </div>
    );
}