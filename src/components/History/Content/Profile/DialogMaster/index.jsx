import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeMasterError } from '../../../../../redux/ducks/user';

import style from './style.module.css';

function DialogMaster() {
  const dispatch = useDispatch();
  const history = useHistory();

  const message = useSelector((state) => state.user.error);

  const closeDialogMaster = () => {
    dispatch(changeMasterError());
  };

  const goToWorkshopProcessing = () => {
    history.push('/history/workshop/processing');
    closeDialogMaster();
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>{message}</div>
      <div className={style.buttons}>
        <div onClick={closeDialogMaster} className={style.button}>
          Ok
        </div>
        <div onClick={goToWorkshopProcessing} className={style.button}>
          Перейти в мастерскую
        </div>
      </div>
    </div>
  );
}

export default DialogMaster;
