import React from 'react';
import { useDispatch } from 'react-redux';

import style from './style.module.css';

function DialogDeleteFail(props) {
  const dispatch = useDispatch();

  const handleDeleteFail = () => {
    props.setDeleteTag(false);
    props.handleChangeClose();
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Вы уверены</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteFail} className={style.button}>
          Да
        </div>
        <div onClick={() => props.setDeleteTag(false)} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteFail;
