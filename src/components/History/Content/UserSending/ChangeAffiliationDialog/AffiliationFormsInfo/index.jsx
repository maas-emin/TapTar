import React, { useContext } from 'react';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function AffiliationFormsInfo(props) {
  const {
    nameError,
    setNameError,
    yearError,
    setYearError,
    authorError,
    setAuthorError,
    title,
    setTitle,
    year,
    setYear,
    author,
    setAuthor,
    location,
    setLocation,
  } = useContext(AffiliationContext);

  const handleChangeTitle = (e) => {
    if (nameError) {
      setNameError('');
    }
    setTitle(e.target.value);
  };

  const handleChangeYear = (e) => {
    if (yearError) {
      setYearError('');
    }
    setYear(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    if (authorError) {
      setAuthorError('');
    }
    setAuthor(e.target.value);
  };

  const handleChangePlace = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={style.forms}>
      <div className={style.form}>
        <div className={style.form__title}>Название</div>
        <input
          placeholder="Введите текст..."
          value={title}
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
          value={location}
          onChange={handleChangePlace}
          className={style.form__input}
          type="text"
          name="place"
        />
      </div>
    </div>
  );
}

export default AffiliationFormsInfo;
