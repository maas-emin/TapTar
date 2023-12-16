import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import userSendMaterial from './ducks/userSendMaterial';
import uploadFiles from './ducks/uploadFiles';
import userTags from './ducks/userTags';
import tags from './ducks/tags';
import user from './ducks/user';
import application from './ducks/application';
import contacts from './ducks/contacts';
import messages from './ducks/messages';
import contribution from './ducks/contribution';
import workshop from './ducks/workshop';
import historianCabinet from './ducks/historianCabinet';
import historianSendMaterial from './ducks/historianSendMaterial';
import incomingMaterials from './ducks/incomingMaterials';
import approver from './ducks/approver';
import showFileCabinet from './ducks/showFileCabinet';
import cabinetMaterial from './ducks/cabinetMaterial';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  workshop,
  userSendMaterial,
  user,
  contribution,
  tags,
  application,
  contacts,
  messages,
  incomingMaterials,
  historianCabinet,
  historianSendMaterial,
  approver,
  showFileCabinet,
  cabinetMaterial,
  uploadFiles,
  userTags,
});

const initialAuthSlice =
  localStorage.getItem('token') == null
    ? JSON.parse(localStorage.getItem('token'))
    : undefined;

const preloadedState = {
  user: initialAuthSlice,
};

export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger),
);

let prevState = store.getState();

// console.log(prevState);
// console.log(preloadedState);
// console.log(initialAuthSlice);

store.subscribe(() => {
  const state = store.getState();

  if (state.user.token !== prevState.user.token) {
    localStorage.setItem('token', JSON.stringify(state.user));
  }

  prevState = state;
});
