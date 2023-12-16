import { Route, Switch } from 'react-router-dom';
import Material from '../Materials/index';
import Photo from '../Photos/index';
import Video from '../Videos';
import Audio from '../Audios';
import Document from '../Documents';
import ShowMaterial from '../ShowMaterial';
import ReadyMaterials from '../ReadyMaterials/index';

import style from './style.module.css';

function ContributionRoutes() {
  return (
    <div className={style.routes}>
      <Switch>
        <Route exact path="/history/contribution" component={Material} />
        <Route
          path="/history/contribution/show/:id?"
          component={ShowMaterial}
        />
        <Route path="/history/contribution/photo" component={Photo} />
        <Route path="/history/contribution/audio" component={Audio} />
        <Route path="/history/contribution/video" component={Video} />
        <Route path="/history/contribution/document" component={Document} />
        <Route
          path="/history/contribution/materials"
          component={ReadyMaterials}
        />
      </Switch>
    </div>
  );
}

export default ContributionRoutes;
