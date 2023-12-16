import style from './style.module.css';

function InfoItem(props) {
  if (!props.info.length) {
    return null;
  }

  return (
    <div className={style.form}>
      <div className={style.form__title}>{props.title}</div>
      <div className={style.form__input}>{props.info}</div>
    </div>
  );
}

export default InfoItem;
