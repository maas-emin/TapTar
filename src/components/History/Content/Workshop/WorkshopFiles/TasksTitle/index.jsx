import React from 'react';

import style from '../stylesMedia.module.css';

function TasksTitle({ item }) {
  return (
    <div className={style.tasks__file}>
      <div className={style['tasks__title--block']}>
        <div className={style.tasks__text}>{item.title}</div>
      </div>
    </div>
  );
}

export default TasksTitle;
