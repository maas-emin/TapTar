import React from 'react';
import MainMasterIcons from '../../../../General/MainMasterIcons';

import style from '../stylesMedia.module.css';

function TasksIcons({ item }) {
  return (
    <div className={style.tasks__file}>
      <MainMasterIcons title={item.title} />
    </div>
  );
}

export default TasksIcons;
