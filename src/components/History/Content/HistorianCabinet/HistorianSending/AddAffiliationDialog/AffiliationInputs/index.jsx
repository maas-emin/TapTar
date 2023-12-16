import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAuthorTag,
  changePlaceTag,
  changeTitleTag,
  changeYearTag,
} from '../../../../../../../redux/ducks/userTags';
import AffiliationComment from '../AffiliationComment';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function AffiliationInputs() {
  const {
    nameError,
    setNameError,
    yearError,
    setYearError,
    authorError,
    setAuthorError,
  } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const name = useSelector((state) => state.userTags.title);
  const year = useSelector((state) => state.userTags.year);
  const author = useSelector((state) => state.userTags.author);
  const place = useSelector((state) => state.userTags.location);

  const handleChangeTitle = (e) => {
    if (nameError) {
      setNameError('');
    }
    dispatch(changeTitleTag(e.target.value));
  };

  const handleChangeYear = (e) => {
    if (yearError) {
      setYearError('');
    }
    dispatch(changeYearTag(e.target.value));
  };

  const handleChangeAuthor = (e) => {
    if (authorError) {
      setAuthorError('');
    }
    dispatch(changeAuthorTag(e.target.value));
  };

  const handleChangePlace = (e) => {
    dispatch(changePlaceTag(e.target.value));
  };

  return (
    <div className={style.forms}>
      <div className={style.form}>
        <div className={style.form__title}>Название</div>
        <input
          placeholder="Введите текст..."
          value={name}
          onChange={handleChangeTitle}
          className={style.form__input}
          type="text"
          name="title"
        />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Год</div>
        <input
          placeholder="Введите текст..."
          value={year}
          onChange={handleChangeYear}
          className={style.form__input}
          type="text"
          name="year"
        />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Автор</div>
        <input
          placeholder="Введите текст..."
          value={author}
          onChange={handleChangeAuthor}
          className={style.form__input}
          type="text"
          name="author"
        />
      </div>
      <div className={style.form}>
        <div className={style.form__title}>Место</div>
        <input
          placeholder="Введите текст..."
          value={place}
          onChange={handleChangePlace}
          className={style.form__input}
          type="text"
          name="place"
        />
      </div>
      <AffiliationComment />
    </div>
  );
}

export default AffiliationInputs;
