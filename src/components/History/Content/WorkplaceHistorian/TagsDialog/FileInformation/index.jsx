import React from 'react';
import InfoItem from './InfoItem';

import style from './style.module.css';

function FileInformation(props) {
  return (
    <div className={style.forms}>
      <InfoItem title="Название:" info={props.name} />
      <InfoItem title="Год:" info={props.year} />
      <InfoItem title="Автор:" info={props.author} />
      <InfoItem title="Место:" info={props.location} />
    </div>
  );
}

export default FileInformation;
