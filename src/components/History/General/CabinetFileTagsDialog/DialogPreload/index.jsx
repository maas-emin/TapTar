import React from 'react';

import style from './styles.module.css';

function DialogPreload() {
  return (
    <div className={style.loader__card}>
      <div className={style.loader__box}>
        <div>
          <div className={style.loader__title}> Идет проверка</div>
          <div className={style.loader__dots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogPreload;
