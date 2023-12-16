import { useSelector } from 'react-redux';
import SecondaryMasterIcons from '../../../../General/SecondaryMasterIcons';
import SaveButton from './SaveButton';
import style from './style.module.css';

function OriginalFile({ media, mediaStyles, type }) {
  const show = useSelector((state) => state.workshop.show);

  return (
    <div className={`${style.original} ${mediaStyles}`}>
      <div className={style.original__title}>Оригинал</div>
      <div className={`${style.original__file} ${mediaStyles}`}>{media}</div>
      {type === 'text' ? null : <SaveButton />}
      <div className={`${style.original__tusks} ${mediaStyles}`}>
        {show.causes?.map((item) => {
          return (
            <div key={item.id} className={style.tasks}>
              <div key={item.id} className={style.tasks__box}>
                <SecondaryMasterIcons title={item.title} />
                <div className={style.tasks__title}>{item.title}</div>
              </div>
              <div className={style.tasks__comment}>{item.comment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OriginalFile;
