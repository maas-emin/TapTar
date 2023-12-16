import { useContext } from 'react';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function AffiliationComment(props) {
  const { comment, setComment, commentError, setCommentError } =
    useContext(AffiliationContext);

  const handleChangeComment = (e) => {
    if (commentError) {
      setCommentError('');
    }
    setComment(e.target.value);
  };

  return (
    <div
      className={`${style.comment} ${
        props.styleGroup ? style.commentGroup : ''
      } ${props.styleAudio ? style.commentAudio : ''}`}
    >
      <div className={style.comment__title}>Комментарий к файлу</div>
      <textarea
        placeholder="Введите текст..."
        value={comment}
        onChange={handleChangeComment}
        className={`${style.comment__text} ${
          props.styleGroup ? style.comment__group : ''
        } ${props.styleAudio ? style.comment__audio : ''}`}
        name="comment"
        id="comment"
        rows="7"
      ></textarea>
    </div>
  );
}

export default AffiliationComment;
