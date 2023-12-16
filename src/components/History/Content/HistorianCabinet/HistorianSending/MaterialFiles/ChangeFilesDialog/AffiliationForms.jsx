import AffiliationComment from './AffiliationComment';

import style from './style.module.css';

function AffiliationForms(props) {
  const handleChangeTitle = (e) => {
    props.setNameError('');
    props.setName(e.target.value);
  };

  const handleChangeYear = (e) => {
    props.setYearError('');
    props.setYear(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    props.setAuthorError('');
    props.setAuthor(e.target.value);
  };

  const handleChangePlace = (e) => {
    props.setAuthorError('');
    props.setLocation(e.target.value);
  };

  return (
    <div className={style.forms}>
      <div className={style.form}>
        <div className={style.form__title}>Название</div>
        <input
          placeholder="Введите текст..."
          autoComplete="off"
          value={props.name}
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
          autoComplete="off"
          value={props.year}
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
          autoComplete="off"
          value={props.author}
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
          autoComplete="off"
          value={props.location}
          onChange={handleChangePlace}
          className={style.form__input}
          type="text"
          name="author"
        />
      </div>
      <AffiliationComment
        comment={props.comment}
        setComment={props.setComment}
        setCommentError={props.setCommentError}
      />
    </div>
  );
}

export default AffiliationForms;
