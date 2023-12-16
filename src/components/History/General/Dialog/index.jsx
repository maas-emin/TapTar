import React from 'react';
import style from './style.module.css';

function Dialog(props) {
  return (
    <React.Fragment>
      <div className={`${props.open ? style.dialog : style.active}`}>
        <div className={`${props.open ? style.dialog__wrapper : style.active}`}>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dialog;
