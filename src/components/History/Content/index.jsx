import Profile from './Profile';
import Workshop from './Workshop';
import UserSending from './UserSending';
import WorkplaceHistorian from './WorkplaceHistorian';
import Approver from './Approver';
import Contribution from './Contribution';
import Messenger from './Messenger';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags, getCauses, getEffects } from '../../../redux/ducks/tags';
import { getDraftFiles } from '../../../redux/actions/userSendMaterial';
import React, { useEffect } from 'react';
import { getMasterRole } from '../../../redux/ducks/user';
import HistorianCabinet from './HistorianCabinet/index';
import { getHistorianDraftFiles } from '../../../redux/actions/historianSendMaterial';
import {
  loadCountNewChat,
  plusCountMessages,
} from '../../../redux/ducks/contacts';
import Echo from 'laravel-echo';

function Content() {
  const token = useSelector((state) => state.user.token);

  window.io = require('socket.io-client');

  const master = useSelector((state) => state.user.master);
  const currentUser = useSelector((state) => state.user.currentUser);

  const id = currentUser.id;
  const role = currentUser.role;

  const dispatch = useDispatch();

  useEffect(() => {
    const echo = new Echo({
      broadcaster: 'socket.io',
      host: process.env.REACT_APP_TEPTAR_HOST,
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    echo
      .private(`notification.${id}`)
      .listen('.received.message', function (e) {
        let params = new URL(document.location).pathname;

        let roomId = params.match(/\d+$/g);

        if (parseInt(roomId) === e.roomId) return;
        dispatch(plusCountMessages(e));
      });
  }, [dispatch, id, token]);

  useEffect(() => {
    if (role === 'user') {
      dispatch(getDraftFiles());
    } else {
      dispatch(getHistorianDraftFiles());
    }
    dispatch(getCauses());
    dispatch(getEffects());
    dispatch(getAllTags());
    dispatch(loadCountNewChat());
  }, [dispatch, role, id]);

  useEffect(() => {
    if (role === 'user') {
      dispatch(getMasterRole());
    }
  }, [dispatch, role]);

  let routes;

  if (role === 'historian') {
    return (routes = (
      <Switch>
        <Route
          path="/history/incoming-materials"
          component={WorkplaceHistorian}
        />
        <Route path="/history/approver" component={Approver} />
        <Route path="/history/my-materials" component={HistorianCabinet} />
        <Route exact path="/history" component={Profile} />
        <Route path="/history/chat" component={Messenger} />
        <Redirect to="/history" />
      </Switch>
    ));
  }

  if (role === 'user') {
    return (routes = (
      <Switch>
        <Route path="/history/send" component={UserSending} />
        {master ? (
          <Route path="/history/workshop" component={Workshop} />
        ) : null}
        <Route path="/history/contribution" component={Contribution} />
        <Route exact path="/history" component={Profile} />
        <Route path="/history/chat" component={Messenger} />
        <Redirect to="/history" />
      </Switch>
    ));
  }

  return routes;
}

export default Content;
