import { api } from '../../api/api';
import jwt_decode from 'jwt-decode';

export const LOGIN_START = 'user/login/start';
export const LOGIN_SUCCESS = 'user/login/success';
export const LOGIN_ERROR = 'user/login/error';
export const LOGIN_GOOGLE_START = 'google/login/start';
export const LOGIN_GOOGLE_SUCCESS = 'google/login/success';
export const POST_LOGIN = 'user/login/post';
export const AUTH_START = 'user/auth/start';
export const AUTH_SUCCESS = 'user/auth/success';
export const AUTH_ERROR = 'user/auth/error';
export const CREATE_START = 'user/create/start';
export const CREATE_SUCCESS = 'user/create/success';
export const CREATE_ERROR = 'user/create/error';
export const LOGOUT = 'user/logout';
export const CHANGE_ERROR = 'error/change';

const AVATAR__ADD__START = 'avatar/add/start';
const AVATAR__ADD__SUCCESS = 'avatar/add/success';

const AVATAR__ADD__PROGRESS = 'change/progress/avatar';

const PASS__CHANGE__START = 'pass/change/start';
const PASS__CHANGE__SUCCESS = 'pass/change/success';

const PASS__GET__START = 'pass/get/start';
const PASS__GET__SUCCESS = 'pass/get/success';

const PROFILE__CHANGE__START = 'profile/change/start';
const PROFILE__CHANGE__SUCCESS = 'profile/change/success';

const MASTER__CHECK__START = 'master/check/start';
const MASTER__CHECK__SUCCESS = 'master/check/success';
const MASTER__ADD__START = 'master/add/start';
const MASTER__ADD__SUCCESS = 'master/add/success';
const MASTER__REMOVE__START = 'master/remove/start';
const MASTER__REMOVE__SUCCESS = 'master/remove/success';
const MASTER__REMOVE__ERROR = 'master/remove/error';
const MASTER__ERROR__CHANGE = 'master/error/change';

const initialState = {
  currentUser: {
    id: null,
    name: '',
    email: '',
    role: '',
    permissions: [],
    avatar: '',
  },
  isAuth: false,
  token: null,
  loading: false,
  loadingMaster: false,
  loadingAuth: false,
  master: false,
  message: '',
  error: false,
  masterError: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case PASS__GET__START:
      return {
        ...state,
        loading: true,
        message: '',
      };

    case PASS__GET__SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      const decodeLogin = jwt_decode(action.payload.access_token);

      return {
        ...state,
        loading: false,
        currentUser: {
          id: decodeLogin.user.id,
          name: decodeLogin.user.name,
          email: decodeLogin.user.email,
          role: decodeLogin.role[0],
          permissions: decodeLogin.permissions,
          avatar: decodeLogin.user.avatar,
        },
        isAuth: true,
        token: action.payload.access_token,
      };

    case LOGIN_GOOGLE_SUCCESS:
      const decodeGoogleLogin = jwt_decode(action.payload);

      return {
        ...state,
        loading: false,
        currentUser: {
          id: decodeGoogleLogin.user.id,
          name: decodeGoogleLogin.user.name,
          email: decodeGoogleLogin.user.email,
          role: decodeGoogleLogin.role[0],
          permissions: decodeGoogleLogin.permissions,
          avatar: decodeGoogleLogin.user.avatar,
        },
        isAuth: true,
        token: action.payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload.data.message,
        error: true,
      };

    case AUTH_START:
      return {
        ...state,
        loadingAuth: true,
        isAuth: false,
        currentUser: {
          id: null,
          name: '',
          email: '',
          role: '',
          permissions: [],
          avatar: '',
        },
        loading: false,
        master: false,
        message: '',
        token: null,
        error: '',
        masterError: false,
      };

    case AUTH_SUCCESS:
      const decodeAuth = jwt_decode(action.payload.access_token);

      return {
        ...state,
        token: action.payload.access_token,
        loadingAuth: false,
        currentUser: {
          id: decodeAuth.user.id,
          name: decodeAuth.user.name,
          email: decodeAuth.user.email,
          role: decodeAuth.role[0],
          permissions: decodeAuth.permissions,
          avatar: decodeAuth.user.avatar,
        },
        isAuth: true,
      };

    case AUTH_ERROR:
      return {
        ...state,
        currentUser: {
          id: null,
          name: '',
          email: '',
          role: '',
          permissions: [],
          avatar: '',
        },
        isAuth: false,
        loading: false,
        loadingAuth: false,
        master: false,
        message: '',
        error: '',
        token: null,
        masterError: false,
      };

    case CREATE_START:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUCCESS:
      const decodeCreate = jwt_decode(action.payload.access_token);

      return {
        ...state,
        loading: false,
        token: action.payload.access_token,
        currentUser: {
          id: decodeCreate.user.id,
          name: decodeCreate.user.name,
          email: decodeCreate.user.email,
          role: decodeCreate.role[0],
          permissions: decodeCreate.permissions,
          avatar: decodeCreate.user.avatar,
        },
        isAuth: true,
      };

    case CREATE_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload.errors,
        error: true,
      };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        currentUser: {
          id: null,
          name: '',
          email: '',
          role: '',
          permissions: [],
          avatar: '',
        },
        isAuth: false,
        loading: false,
        loadingAuth: false,
        master: false,
        message: '',
        error: '',
        token: null,
      };

    case CHANGE_ERROR:
      return {
        ...state,
        error: false,
        message: '',
      };

    case MASTER__CHECK__START:
      return {
        ...state,
        loadingMaster: true,
      };

    case MASTER__CHECK__SUCCESS:
      return {
        ...state,
        loadingMaster: false,
        master: action.payload.message,
      };

    case MASTER__ADD__START:
      return {
        ...state,
        loadingMaster: true,
      };

    case MASTER__ADD__SUCCESS:
      return {
        ...state,
        loadingMaster: false,
        master: true,
        message: action.payload.message,
      };

    case AVATAR__ADD__START:
      return {
        ...state,
        loading: true,
      };

    case AVATAR__ADD__SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: {
          ...state.currentUser,
          avatar: action.payload.message,
        },
        message: action.payload.message,
      };

    case PROFILE__CHANGE__SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: {
          ...state.currentUser,
          name: action.payload.name,
          email: action.payload.email,
        },
        message: action.payload.data,
      };

    case MASTER__REMOVE__START:
      return {
        ...state,
        loadingMaster: true,
      };

    case MASTER__REMOVE__SUCCESS:
      return {
        ...state,
        loadingMaster: false,
        master: false,
        message: action.payload.message,
      };

    case MASTER__REMOVE__ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.data.message,
        masterError: true,
      };

    case MASTER__ERROR__CHANGE:
      return {
        ...state,
        error: '',
        masterError: false,
      };

    default:
      return state;
  }
}

export const auth = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

export const authError = () => {
  return {
    type: AUTH_ERROR,
  };
};

export const registration = (name, email, password, password_confirmation) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_START,
    });

    api
      .post('/register', {
        name,
        email,
        password,
        password_confirmation,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: CREATE_SUCCESS,
          payload: data,
        });
        // localStorage.setItem('token', data.access_token);
      })
      .catch((e) => {
        dispatch({
          type: CREATE_ERROR,
          payload: e.response.data,
        });
        console.error(e.response.data);
      });
  };
};

export const registrationSocial = (
  name,
  email,
  password,
  password_confirmation,
  uuid,
) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_START,
    });

    api
      .post('/oauth/register', {
        name,
        email,
        password,
        password_confirmation,
        uuid,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: CREATE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: CREATE_ERROR,
          payload: e.response.data,
        });
        console.error(e.response.data);
      });
  };
};

export const recoveryPassUser = (password, confirmed, email, token) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_START,
    });

    api
      .post(`/password/reset/${email}/${token}`, {
        password,
        password_confirmation: confirmed,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: e.response.data,
        });
        console.error(e.response.data);
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_START,
    });

    api
      .post('/login', {
        email,
        password,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: e.response,
        });
        console.error(e.response);
      });
  };
};

export const userLogOut = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT,
  };
};

export const ChangeError = () => {
  return {
    type: CHANGE_ERROR,
  };
};

export const getMasterRole = () => {
  return (dispatch) => {
    dispatch({
      type: MASTER__CHECK__START,
    });

    api
      .get('/user/settings/role-master/check ')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: MASTER__CHECK__SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const addMasterRole = () => {
  return (dispatch) => {
    dispatch({
      type: MASTER__ADD__START,
    });

    api
      .get('/user/settings/role-master/add')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: MASTER__ADD__SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const deleteMasterRole = () => {
  return (dispatch) => {
    dispatch({
      type: MASTER__REMOVE__START,
    });

    api
      .get('/user/settings/role-master/remove')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: MASTER__REMOVE__SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: MASTER__REMOVE__ERROR,
          payload: e.response,
        });
      });
  };
};

export const changeMasterError = () => {
  return {
    type: MASTER__ERROR__CHANGE,
  };
};

export const addAvatar = (file) => {
  const form = new FormData();
  form.append('photo', file);

  return (dispatch) => {
    dispatch({
      type: AVATAR__ADD__START,
    });

    api
      .post('/user/profile/upload/avatar', form, {
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') ||
              progressEvent.target.getResponseHeader(
                'x-decompressed-content-length',
              );
          if (totalLength) {
            let progress = Math.round(
              (progressEvent.loaded * 100) / totalLength,
            );
            dispatch({
              type: AVATAR__ADD__PROGRESS,
              payload: progress,
            });
          }
        },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: AVATAR__ADD__SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const changeUserPass = (newPass, checkPass, oldPass) => {
  return (dispatch) => {
    dispatch({
      type: PASS__CHANGE__START,
    });

    api
      .post('/user/profile/password', {
        password: newPass,
        password_confirmation: checkPass,
        old_password: oldPass,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PASS__CHANGE__SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const changeUserProfile = (name, email) => {
  return (dispatch) => {
    dispatch({
      type: PROFILE__CHANGE__START,
    });

    api
      .post('/user/profile', {
        name,
        email,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PROFILE__CHANGE__SUCCESS,
          data: data,
          payload: { name, email },
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getPasswordReset = (email) => {
  return (dispatch) => {
    dispatch({
      type: PASS__GET__START,
    });

    api
      .post('/password/reset', {
        email,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PASS__GET__SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const loginGoogle = (token) => {
  return {
    type: LOGIN_GOOGLE_SUCCESS,
    payload: token,
  };
};
