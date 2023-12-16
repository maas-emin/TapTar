import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlockedMaterials from '../BlockedMaterials';
import NewMaterials from '../NewMaterials';
import ProcessedMaterials from '../ProcessedMaterials';
import ProcessingMaterials from '../ProcessingMaterials';

import style from './style.module.css';

function MaterialsRoutes() {
  return (
    <div className={style.routes}>
      <Switch>
        <Route
          exact
          path="/history/incoming-materials"
          component={NewMaterials}
        />
        <Route
          path="/history/incoming-materials/processing"
          component={ProcessingMaterials}
        />
        <Route
          path="/history/incoming-materials/processed"
          component={ProcessedMaterials}
        />
        <Route
          path="/history/incoming-materials/blocked"
          component={BlockedMaterials}
        />
      </Switch>
    </div>
  );
}

export default MaterialsRoutes;
