import { useDispatch, useSelector } from 'react-redux';
import { openWorkplaceAffiliationNew } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function MaterialTextNew() {
  const text = useSelector(
    (state) => state.incomingMaterials.material.files.text,
  );

  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const handleChangeOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(openWorkplaceAffiliationNew(text));
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

export default MaterialTextNew;
