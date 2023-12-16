import React from 'react';
import moment from 'moment';
import icon from '../../../../../assets/NewIcons/MaterialCard.svg';

import style from './style.module.css';

function Material(props) {
  const titleSub = props.material.title.substr(0, 45);
  const title = props.material.title;

  return (
    <div className={style.material}>
      <div className={style.material__logo}>
        <img src={icon} alt="404" />
      </div>
      <div className={style.material__name}>
        {title.length >= 45 ? `${titleSub}...` : title}
      </div>
      <div className={style.infoBlock}>
        <div
          className={`${style.info__circle} ${
            props.material.status === 'processing' ? style.processing : ''
          } ${props.material.status === 'processed' ? style.processed : ''}`}
        ></div>
        <div>
          <div className={style.material__status}>
            <div className={style.status__title}>Cтатус :</div>
            <div className={style.status__variant}>
              {props.material.status === 'processing' ? 'Обрабатывается' : null}
              {props.material.status === 'wait' ? 'Ждет обработки' : null}
              {props.material.status === 'processed' ? 'Обработан' : null}
            </div>
          </div>
          <div className={style.material__date}>
            <div className={style.date_title}>Дата отправки материала:</div>
            <div className={style.date__time}>
              {moment(props.material.created_at)
                .locale('ru')
                .format('DD.MM.YYYY')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Material;
