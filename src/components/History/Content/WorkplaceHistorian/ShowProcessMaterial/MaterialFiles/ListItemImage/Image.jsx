import React from 'react';
import ChangeIcons from '../ProcessIcons/ChangeIcons';

import style from '../listStyles.module.css';

function Image({ item }) {
  const titleSub = item.title.substr(0, 12);
  const titleFile = item.title;

  const title = titleFile.length >= 12 ? `${titleSub}...` : titleFile;

  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.image}>
          <img
            src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${item.path_to_file}`}
            alt=""
          />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={item} />
        </div>
        <div className={!item.processed ? style.error : style.not__error}>
          {!item.processed ? 'Не обработано' : 'Обработано'}
        </div>
      </div>
      <p className={style.name}>{item.title ? title : 'Нет названия'}</p>
    </div>
  );
}

export default Image;
