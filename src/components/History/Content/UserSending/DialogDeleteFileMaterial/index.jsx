import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFile,
  removeFiles,
} from '../../../../../redux/actions/userSendMaterial';
import { closeDialogDeleteUserSend } from '../../../../../redux/ducks/application';

import style from './style.module.css';

function DialogDeleteFileMaterial() {
  const dispatch = useDispatch();

  const files = useSelector((state) => state.application.userSendDelete.files);

  const handleDeleteFail = () => {
    if (files.group_uid) {
      dispatch(removeFiles(files));
      handleClose();
      return;
    }
    dispatch(removeFile(files));
    handleClose();
  };

  const handleClose = () => {
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

export default DialogDeleteFileMaterial;
