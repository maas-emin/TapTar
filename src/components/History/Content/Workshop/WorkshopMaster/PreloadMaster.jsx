import React from 'react';

import style from './style.module.css';

function PreloadMaster() {
  return (
    <div className={style.loader}>
      <div className={style.loader__card}>
        <div className={style.loader__box}>
          <div>
            <div className={style.loader__title}> Идет загрdddузка</div>
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

export default PreloadMaster;
