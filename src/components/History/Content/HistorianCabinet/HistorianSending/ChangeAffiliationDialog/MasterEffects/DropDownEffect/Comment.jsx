import { useContext } from 'react';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function Comment() {
  const { master, setMaster } = useContext(EffectContext);

  const handleChangeComment = (e) => {
    setMaster({
      ...master,
      item: {
        ...master.item,
        comment: e.target.value,
      },
    });
  };

  return (
    <div className={style.effectTextarea}>
      <textarea
        placeholder="Введите текст..."
        value={master.item.comment}
        onChange={handleChangeComment}
        className={style.effectComment}
        name="comment"
        id="comment"
        rows="7"
      ></textarea>
    </div>
  );
}

export default Comment;
