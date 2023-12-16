import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeMaterialDeleteBookmark } from '../../../../../redux/ducks/application';
import { deleteCabinetMaterial } from '../../../../../redux/ducks/cabinetMaterial';

import style from './style.module.css';

function DialogDeleteCabinetMaterial() {
  const history = useHistory();
  const dispatch = useDispatch();
  const material = useSelector((state) => state.cabinetMaterial.material);

  const body = document.querySelector('body');

  const handleDeleteFail = () => {
    dispatch(deleteCabinetMaterial(material.id));
    history.push('/history/my-materials');
    handleClose();
  };

  const handleClose = () => {
    body.style.overflow = 'visible';
    dispatch(closeMaterialDeleteBookmark());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Удалить материал</div>
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

export default DialogDeleteCabinetMaterial;
