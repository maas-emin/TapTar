import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApproverNew from '../ApproverNew';
import ApproverProcessed from '../ApproverProcessed';
import ApproverProcessings from '../ApproverProcessings';

import style from './style.module.css';

function ApproverRoutes() {
  return (
    <div className={style.routes}>
      <Switch>
        <Route exact path="/history/approver" component={ApproverNew} />
        <Route
          path="/history/approver/processing"
          component={ApproverProcessings}
        />
        <Route
          path="/history/approver/processed"
          component={ApproverProcessed}
        />
        <Route
          path="/history/approver/rejected"
          component={ApproverProcessed}
        />
      </Switch>
    </div>
  );
}

export default ApproverRoutes;
