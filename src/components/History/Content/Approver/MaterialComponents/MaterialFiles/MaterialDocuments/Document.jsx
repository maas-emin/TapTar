import React from 'react';
import ShowIcon from '../ProcessIcons/ShowIcon';
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
          <ShowIcon item={item} />
        </div>
      </div>
      <p className={style.name}>{item.title ? item.title : 'Нет названия'}</p>
    </div>
  );
}

export default Document;
