import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDeleteError } from '../../../../../redux/ducks/contacts';

import style from './style.module.css';

function DeleteError({ handleClose }) {
  const body = document.querySelector('body');

  const dispatch = useDispatch();

  const message = useSelector((state) => state.contacts.error.message);

  const closeDialogPreload = () => {
    body.style.overflow = 'visible';
    dispatch(changeDeleteError());
    handleClose();
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>{message}</div>
      <div className={`${style.buttons} ${style.error}`}>
        <div onClick={closeDialogPreload} className={style.button}>
          Ok
        </div>
      </div>
    </div>
  );
}

export default DeleteError;
