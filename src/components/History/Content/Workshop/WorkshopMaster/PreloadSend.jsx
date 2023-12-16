import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addSuccessfulSend } from '../../../../../redux/ducks/workshop';

import style from './style.module.css';

function PreloadSend() {
  const dispatch = useDispatch();

  const history = useHistory();

  const message = useSelector((state) => state.workshop.messageSend);

  const handleClickGoBack = () => {
    history.push('/history/workshop');
    dispatch(addSuccessfulSend());
  };

  return (
    <div className={style.loader}>
      <div className={style.loader__card}>
        <div className={style.loader__box}>
          <div>
            {message === null ? (
              <React.Fragment>
                <div className={style.loader__title}> Идет отправка</div>
                <div className={style.loader__dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className={style.loader__title}> Идет отправка</div>
                <button onClick={handleClickGoBack}>
                  {' '}
                  вернуться на главную
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreloadSend;
