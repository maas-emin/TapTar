import { useDispatch, useSelector } from 'react-redux';
import { changeCommentTag } from '../../../../../redux/ducks/userTags';

import style from './style.module.css';

function AffiliationComment(props) {
  const dispatch = useDispatch();

  const comment = useSelector((state) => state.userTags.comment);

  const handleChangeComment = (e) => {
    props.setCommentError('');
    dispatch(changeCommentTag(e.target.value));
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
