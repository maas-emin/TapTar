import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCommentTag } from '../../../../../../../redux/ducks/userTags';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function AffiliationComment() {
  const { commentError, setCommentError } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const comment = useSelector((state) => state.userTags.comment);

  const handleChangeComment = (e) => {
    if (commentError) {
      setCommentError('');
    }
    dispatch(changeCommentTag(e.target.value));
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
