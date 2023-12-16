import style from './style.module.css';

function AffiliationComment(props) {
  const handleChangeComment = (e) => {
    props.setCommentError('');
    props.setComment(e.target.value);
  };

  return (
    <div className={style.comment}>
      <div className={style.comment__title}>Комментарий к файлу</div>
      <textarea
        placeholder="Введите текст..."
        value={props.comment}
        onChange={handleChangeComment}
        className={style.comment__text}
        name="comment"
        id="comment"
        rows="7"
      ></textarea>
    </div>
  );
}

export default AffiliationComment;
