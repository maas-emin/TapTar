import React from 'react';
import { useDispatch } from 'react-redux';
import { changeProgressError } from '../../../../../redux/ducks/userSendMaterial';

import style from './styles.module.css';

function PreloadError({ handleClose }) {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const closeDialogPreload = () => {
    body.style.overflow = 'visible';
    dispatch(changeProgressError());
    handleClose();
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Произошла ошибка</div>
      <div className={style.buttons}>
        <div onClick={closeDialogPreload} className={style.button}>
          Ok
        </div>
      </div>
    </div>
  );
}

export default PreloadError;
