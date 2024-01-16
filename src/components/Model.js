import React from 'react';

const Modal = ({ isOpen, suggestion, onClose, onCopy }) => {
    console.log(onCopy)
    return (
        <div className={`modal ${isOpen ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark">Suggestion</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-dark">
                        <p>{suggestion}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCopy}>
                            Copy Suggestion
                        </button>
                        <button type="button" className="btn btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
