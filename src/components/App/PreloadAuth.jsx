import React from 'react';

import style from './style.module.css';

function PreloadAuth() {
  return (
    <div className={style.loader}>
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
    </div>
  );
}

export default PreloadAuth;
