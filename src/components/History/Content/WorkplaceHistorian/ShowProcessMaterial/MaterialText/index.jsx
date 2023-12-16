import { useSelector, useDispatch } from 'react-redux';
import { openWorkplaceAffiliationProcess } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function MaterialText() {
  const dispatch = useDispatch();

  const text = useSelector(
    (state) => state.incomingMaterials.material.files.text,
  );

  const body = document.querySelector('body');

  const handleChangeOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(openWorkplaceAffiliationProcess(text));
  };

  return (
    <div className={style.form__text}>
      <div className={style.form__subtitle}>
        <p>Текст</p>
      </div>
      <textarea
        disabled
        value={text.text}
        className={style['form__input-text']}
      />
      {!text.text ? null : (
        <div onClick={handleChangeOpen} className={style.form__prompt}>
          <div
            className={
              text.processed
                ? style['form__prompt--selected']
                : style['form__prompt--error']
            }
          >
            {!text.processed ? 'Не обработано' : 'Обработано'}
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialText;
