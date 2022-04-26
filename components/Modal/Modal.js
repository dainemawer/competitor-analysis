import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { XCircleIcon } from '@heroicons/react/solid'

const Modal = ({ open, children, closeModal }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    
    useEffect(() => {
        setIsBrowser(true)
    }, []);

    const modal = open ? (
        <dialog className="modal" open={open}>
            <header>
                <button onClick={closeModal} type="button">
                    <XCircleIcon className="w-5 h-5" />
                </button>
            </header>
            {children}
        </dialog>
    ) : null;

    if(isBrowser) {
        return ReactDOM.createPortal(
            modal,
            document.getElementById('modal')
        )
    } else {
        return null;
    }
}

export default Modal;