import { useDispatch, useSelector } from 'react-redux';
import { openMaterialFileDialog } from '../../../../../redux/ducks/showFileCabinet';

import style from './style.module.css';

function MaterialText() {
  const text = useSelector(
    (state) => state.cabinetMaterial.material.files.text,
  );

  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const handleChangeOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(openMaterialFileDialog(text));
  };

  return (
    <div className={style.form__text}>
      <div className={style.form__subtitle}>
        <p>Текст</p>
      </div>
      <textarea
        value={text.text}
        disabled
        className={style['form__input-text']}
      ></textarea>
      {!text.text ? null : (
        <div onClick={handleChangeOpen} className={style.form__prompt}>
          <div className={style['form__prompt--selected']}>посмотреть</div>
        </div>
      )}
    </div>
  );
}

export default MaterialText;
