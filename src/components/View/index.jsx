import { Route } from 'react-router-dom';
import Registration from '../Registration';
import SendEmail from '../SendEmail';
import ViewContainer from './ViewContainer';

import style from './style.module.css';

function index() {
  return (
    <div className={style.view}>
      <Route path="/:name?" component={ViewContainer} />
      <Route path="/registration/:oauth?" component={Registration} />
      <Route path="/recovery" component={SendEmail} />
      <Route path="/recovery/:token?" component={Registration} />
    </div>
  );
}

export default index;
