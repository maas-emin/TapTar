import React from 'react';
import WorkshopNavigation from './WorkshopNavigation';
import WorkshopRoutes from './WorkshopRoutes';

import style from './style.module.css';

function WorkshopFiles() {
  return (
    <div className={style.menu}>
      <WorkshopNavigation />
      <WorkshopRoutes />
    </div>
  );
}

export default WorkshopFiles;
