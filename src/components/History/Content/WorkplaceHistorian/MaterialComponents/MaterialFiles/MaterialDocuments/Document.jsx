import React from 'react';
import ShowIcon from '../ProcessIcons/ShowIcon';
import DocumentIcon from '../../../../../../../Svg/CabinetSvg/DocumentIcon/DocumentIcon';

import style from '../listStyles.module.css';

function Document({ item }) {
  const titleSub = item.title.substr(0, 12);
  const titleFile = item.title;

  const title = titleFile.length >= 12 ? `${titleSub}...` : titleFile;

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
      <p className={style.name}>{item.title ? title : 'Нет названия'}</p>
    </div>
  );
}

export default Document;
