import React from 'react';
import ReactPlayer from 'react-player';
import ShowIcon from '../ProcessIcons/ShowIcon';

import style from '../listStyles.module.css';

function Video({ item }) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.video}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${item.path_to_file}`}
          />
        </div>
        <div className={style.icons}>
          <ShowIcon item={item} />
        </div>
      </div>
      <p className={style.name}>{item.title ? item.title : 'Нет названия'}</p>
    </div>
  );
}

export default Video;
