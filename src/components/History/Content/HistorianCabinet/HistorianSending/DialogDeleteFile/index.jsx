import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFileHistorian } from '../../../../../../redux/actions/historianSendMaterial';
import { closeDialogDeleteUserSend } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function DialogDeleteFile() {
  const dispatch = useDispatch();

  const files = useSelector((state) => state.application.userSendDelete.files);

  const body = document.querySelector('body');

  const handleDeleteFail = () => {
    dispatch(removeFileHistorian(files));
    handleClose();
  };

  const handleClose = () => {
    body.style.overflow = 'visible';
    dispatch(closeDialogDeleteUserSend());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Вы уверены</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteFail} className={style.button}>
          Да
        </div>
        <div onClick={handleClose} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteFile;
