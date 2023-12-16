import style from './style.module.css';

function FileComment(props) {
  if (!props.comment) {
    return null;
  }

  return (
    <div className={style.comment}>
      <div className={style.comment__title}>Комментарий:</div>
      <div className={style.comment__text}>{props.comment}</div>
    </div>
  );
}

export default FileComment;
