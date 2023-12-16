import { useContext } from 'react';
import { AffiliationContext } from '../AffiliationContainer/context';

import style from './style.module.css';

function AffiliationComment() {
  const { comment, setComment, commentError, setCommentError } =
    useContext(AffiliationContext);

  const handleChangeComment = (e) => {
    if (commentError) {
      setCommentError('');
    }
    setComment(e.target.value);
  };

  return (
    <div className={style.comment}>
      <div className={style.comment__title}>Комментарий к файлу</div>
      <textarea
        placeholder="Введите текст..."
        value={comment}
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
