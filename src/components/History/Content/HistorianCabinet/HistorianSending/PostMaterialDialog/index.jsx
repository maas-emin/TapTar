import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postHistorianMaterial } from '../../../../../../redux/actions/historianSendMaterial';
import { closeMateriaPosteBookmark } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function PostMaterialDialog() {
  const body = document.querySelector('body');

  const dispatch = useDispatch();
  const materials = useSelector(
    (state) => state.historianSendMaterial.materials,
  );

  const handlePostFile = () => {
    dispatch(
      postHistorianMaterial(
        materials.bookmark,
        materials.is_material,
        materials.title,
        materials.text,
        materials.photo,
        materials.document,
        materials.audio,
        materials.video,
      ),
    );
    handleClose();
  };

  const handleClose = () => {
    body.style.overflow = 'visible';
    dispatch(closeMateriaPosteBookmark());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Отправить материал</div>
      <div className={style.buttons}>
        <div onClick={handlePostFile} className={style.button}>
          Да
        </div>
        <div onClick={handleClose} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default PostMaterialDialog;
