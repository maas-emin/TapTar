import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeDialogDeleteBookmark } from '../../../../../redux/ducks/application';
import { deleteCabinetFile } from '../../../../../redux/ducks/historianCabinet';

import style from './style.module.css';

function DialogDeleteCabinetFile() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.application.bookmarkDialog.id);

  const handleDeleteMassage = () => {
    dispatch(deleteCabinetFile(id));
    dispatch(closeDialogDeleteBookmark());
  };

  const handleClose = () => {
    dispatch(closeDialogDeleteBookmark());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Удалить файл</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteMassage} className={style.button}>
          Да
        </div>
        <div onClick={handleClose} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteCabinetFile;
