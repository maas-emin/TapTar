import { useSelector } from 'react-redux';
import style from './style.module.css';

function OriginalFile({ media, mediaStyles }) {
  const show = useSelector((state) => state.workshop.show);

  return (
    <div className={`${style.original} ${mediaStyles}`}>
      <div className={style.original__title}>Оригинал</div>
      <div className={`${style.original__file} ${mediaStyles}`}>{media}</div>
      <div className={`${style.original__tusks} ${mediaStyles}`}>
        {show.causes?.map((item) => {
          return (
            <div key={item.id} className={`${style.tasks} ${mediaStyles}`}>
              <div key={item.id} className={style.tasks__box}>
                <img className={style.tasks__img} src={item.path_icon} alt="" />
                <div className={style.tasks__title}>{item.title}</div>
                <div className={style.tasks__comment}>{item.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OriginalFile;
