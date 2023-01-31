import {Component} from 'react';
import {createPortal} from 'react-dom';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal);
    }

    closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            // this.props.onClose();
        }
    }

    render() {
        const {children} = this.props;
        const {closeModal} = this;
        return (
            createPortal(
                <div onClick={closeModal} className={styles.overlay}>
                    <div className={styles.modal}>
                        {children}
                    </div>
                </div>,
                modalRoot
            )
        )
    }
}

export default Modal;