import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const timing = { enter: 400, exit: 1000 }; // in milliseconds

// prettier-ignore
const classNames = { enter: '', enterActive: 'ModalOpen', exit: '', exitActive: "ModalClosed" };

const Modal = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={timing}
      mountOnEnter
      unmountOnExit
      classNames={classNames}
    >
      <div className="Modal">
        <h1>Jessica Davies</h1>
        <img src={require('../../assets/headshot.avif')} alt="Profile" />
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
