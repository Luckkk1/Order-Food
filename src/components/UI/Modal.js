import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.querySelector('#overlay')
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.querySelector('#overlay')
      )}
    </Fragment>
  );
};

export default Modal;
