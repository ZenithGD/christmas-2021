import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({show, wish, onClose}) {
    // Keep track of whether the component was rendered in browser or server
    const [isBrowser, setIsBrowser] = useState(false);

    // Set to true on initial render
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        console.log("close")
        onClose();
    };

    const modalContent = show ? (
        <div className="ct-overlay">
            <div className="ct-popup">
                <p>{wish.name}</p>
                <p>{wish.info}</p>
                <button onClick={handleCloseClick}>
                    x
                </button>
            </div>
        </div>
    ) : null;

    // Conditionally create portal if rendering happens at client's side
    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
    } else {
        return null;
    }
}

export default Modal;