import React, { useState } from 'react';
import { useCallback } from 'react';
import MaterialUploadButtons from '../MaterialUploadButtons';

import style from './style.module.css';

function MaterialButtonsContainer() {
  const [fileAdd, setFileAdd] = useState(false);

  const handleClickOpen = useCallback(() => {
    setFileAdd(!fileAdd);
  }, [fileAdd]);

  return (
    <div className={style.fails__addSpace}>
      <div onClick={handleClickOpen} className={`${style['fails__add-btn']}`}>
        <svg
          className={`${!fileAdd ? style.norotate : style.rotate}`}
          xmlns="http://www.w3.org/2000/svg"
          space="preserve"
          width="34px"
          height="34px"
          version="1.1"
          viewBox="0 0 23.12 23.12"
          xlink="http://www.w3.org/1999/xlink"
          xodm="http://www.corel.com/coreldraw/odm/2003"
        >
          <g id="Слой_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <circle
              fill="#fff"
              fillRule="nonzero"
              cx="11.56"
              cy="11.56"
              r="11.56"
            />
            <path
              fill="#C4C4C4"
              fillRule="nonzero"
              d="M11.56 4.11l0 0c0.72,0 1.3,0.59 1.3,1.3l0 4.84 4.84 0c0.72,0 1.3,0.59 1.3,1.3l0 0c0,0.72 -0.59,1.3 -1.3,1.3l-4.84 0 0 4.84c0,0.72 -0.59,1.3 -1.3,1.3l-0 0c-0.72,0 -1.3,-0.59 -1.3,-1.3l0 -4.84 -4.84 0c-0.72,0 -1.3,-0.59 -1.3,-1.3l0 -0c0,-0.72 0.59,-1.3 1.3,-1.3l4.84 0 0 -4.84c0,-0.72 0.59,-1.3 1.3,-1.3z"
            />
          </g>
        </svg>
      </div>
      <MaterialUploadButtons handleClick={handleClickOpen} fileAdd={fileAdd} />
    </div>
  );
}

export default MaterialButtonsContainer;
