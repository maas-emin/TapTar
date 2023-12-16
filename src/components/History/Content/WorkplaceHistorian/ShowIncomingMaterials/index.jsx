import React from 'react';
import MaterialsNav from './MaterialsNav';
import MaterialsRoutes from './MaterialsRoutes';

import style from './style.module.css';

function WorkshopShow() {
  return (
    <div className={style.menu}>
      <MaterialsNav />
      <MaterialsRoutes />
    </div>
  );
}

export default WorkshopShow;
