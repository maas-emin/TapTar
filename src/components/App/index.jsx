import History from '../History/index';
import { useEffect, useLayoutEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth, authError, loginGoogle } from '../../redux/ducks/user';
import PreloadAuth from './PreloadAuth';
import { api } from '../../api/api';
import { useState } from 'react';
import SendEmail from '../SendEmail';
import Registration from '../Registration';
import ViewContainer from '../View/ViewContainer';
import PassRecovery from '../PassRecovery';
import style from './style.module.css';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const [autologinning, setAutologinning] = useState(true);

  const userToken = useSelector((state) => state.user.token);

  useLayoutEffect(() => {
    if (autologinning) {
      (async () => {
        try {
          const autologin = await api.get('/auth', {
            headers: { Authorization: `Bearer ${userToken}` },
          });
          dispatch(auth(autologin.data));
        } catch (e) {
          setAutologinning(false);
          dispatch(authError());
          console.error(e);
        } finally {
          setAutologinning(false);
        }
      })();
    }
  }, []);

  useEffect(() => {
    api.defaults.headers = {
      Authorization: `Bearer ${userToken}`,
    };
  }, [userToken]);

  if (autologinning) {
    return <PreloadAuth />;
  }

  let routes;

  if (userToken) {
    routes = (
      <Switch>
        <Route path="/history" component={History} />
        <Redirect to="/history" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/:name?" component={ViewContainer} />
        <Route path="/registration/:oauth?" component={Registration} />
        <Route path="/recovery/email" component={SendEmail} />
        <Route path="/recovery/:token?" component={PassRecovery} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <div className={style.app}>{routes}</div>;
}

export default App;
