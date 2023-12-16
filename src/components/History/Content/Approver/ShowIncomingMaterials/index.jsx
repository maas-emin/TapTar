import React from 'react';
import ApproverNav from './ApproverNav';
import ApproverRoutes from './ApproverRoutes';

import style from './style.module.css';

function WorkshopShow() {
  return (
    <div className={style.menu}>
      <ApproverNav />
      <ApproverRoutes />
    </div>
  );
}

export default WorkshopShow;
