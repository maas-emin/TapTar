import { Route } from 'react-router-dom';
import style from './style.module.css';
import WorkshopMaster from './WorkshopMaster';
import WorkshopFiles from './WorkshopFiles';

function Workshop() {
  return (
    <div className={style.workshop}>
      <Route exact path="/history/workshop/:name?" component={WorkshopFiles} />
      <Route path="/history/workshop/master/:id?" component={WorkshopMaster} />
    </div>
  );
}

export default Workshop;
