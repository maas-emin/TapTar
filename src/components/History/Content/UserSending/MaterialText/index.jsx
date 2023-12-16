import { useSelector, useDispatch } from 'react-redux';
import {
  changeText,
  clearTextForm,
  deleteDraftText,
} from '../../../../../redux/actions/userSendMaterial';
import { postText } from '../../../../../redux/ducks/uploadFiles';

import style from './style.module.css';
import { openChangeAffiliationFiles } from '../../../../../redux/ducks/application';

function MaterialText() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.userSendMaterial.materials.text);

  const body = document.querySelector('body');

  const handleOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(postText(text.text));
  };

  const handleChangeOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(openChangeAffiliationFiles(text));
  };

  const handleChange = (e) => {
    if (
      e.target.value === '' &&
      text.text !== undefined &&
      text.id !== undefined
    ) {
      dispatch(deleteDraftText(text.id));
    }
    dispatch(changeText(e.target.value));
  };

  const handleClickClearText = () => {
    if (text.id !== undefined) return dispatch(deleteDraftText(text.id));

    return dispatch(clearTextForm());
  };

  return (
    <>
      <div className={style.form__text}>
        <div className={style.form__subtitle}>
          <p>Добавить текст</p>
          <div onClick={handleClickClearText} className={style.textClearBtn}>
            удалить текст
          </div>
        </div>
        <textarea
          value={text.text === undefined ? '' : text.text}
          onChange={handleChange}
          className={style['form__input-text']}
          type="text"
          name="text"
          placeholder="Введите текст..."
        />
        <div
          onClick={text.title ? handleChangeOpen : handleOpen}
          className={text.text ? style.form__prompt : style.active}
        >
          <div
            className={
              text.title
                ? style['form__prompt--selected']
                : style['form__prompt--error']
            }
          >
            {text.title
              ? 'Принадлежность текста настроена'
              : 'Принадлежность текста не настроена'}
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialText;
