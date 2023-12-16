import React from 'react';
import style from './style.module.css';

function DialogButtons(props) {
  return (
    <React.Fragment>
      <div className={`${props.open ? style.dialog : style.active}`}></div>
      <div className={`${props.open ? style.dialog__wrapper : style.active}`}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default DialogButtons;
