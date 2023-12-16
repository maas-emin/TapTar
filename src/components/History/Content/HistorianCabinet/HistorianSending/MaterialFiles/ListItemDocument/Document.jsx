import ChangeIcons from '../ProcessIcons/ChangeIcons';
import DocumentIcon from '../../../../../../../Svg/CabinetSvg/DocumentIcon/DocumentIcon';

import style from '../listStyles.module.css';

function Document({ item }) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.document}>
          <DocumentIcon color="#fff" styleName={'materialCard'} />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={item} />
        </div>
        <div className={!item.processed ? style.error : style.not__error}>
          {!item.processed ? 'Не обработано' : 'Обработано'}
        </div>
      </div>
      <p className={style.name}>{item.title ? item.title : 'Нет названия'}</p>
    </div>
  );
}

export default Document;
