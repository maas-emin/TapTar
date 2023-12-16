import { api } from '../../api/api';

export const MATERIAL_START = 'material/load/start';
export const MATERIAL_SUCCESS = 'material/load/success';
export const PHOTO_START = 'photo/load/start';
export const PHOTO_SUCCESS = 'photo/load/success';
export const VIDEO_START = 'video/load/start';
export const VIDEO_SUCCESS = 'video/load/success';
export const AUDIO_START = 'audio/load/start';
export const AUDIO_SUCCESS = 'audio/load/success';
export const DOCUMENT_START = 'document/load/start';
export const DOCUMENT_SUCCESS = 'document/load/success';
export const SHOW_START = 'material/show/load/start';
export const SHOW_SUCCESS = 'material/show/load/success';
export const READY_START = 'material/ready/load/start';
export const READY_SUCCESS = 'material/ready/load/success';

const initialState = {
  material: [],
  readyMaterial: [],
  photo: [],
  video: [],
  audio: [],
  document: [],
  showMaterial: {},
  loading: false,
  showLoading: false,
  error: '',
};

export default function contribution(state = initialState, action) {
  switch (action.type) {
    case SHOW_START:
      return {
        ...state,
        showLoading: true,
      };

    case SHOW_SUCCESS:
      if (action.payload.code === 404) {
        return {
          ...state,
          showLoading: false,
          showMaterial: action.payload.message,
        };
      }

      return {
        ...state,
        showLoading: false,
        showMaterial: action.payload.message,
      };

    case READY_START:
      return {
        ...state,
        loading: true,
      };

    case READY_SUCCESS:
      return {
        ...state,
        loading: false,
        readyMaterial: action.payload.message,
      };

    case MATERIAL_START:
      return {
        ...state,
        loading: true,
      };

    case MATERIAL_SUCCESS:
      const materials = action.payload.message;
      const arrWait = materials.filter((item) => item.status === 'wait');
      const processingArr = materials.filter(
        (item) => item.status === 'processing',
      );
      const processedArr = materials.filter(
        (item) => item.status === 'processed',
      );

      return {
        ...state,
        loading: false,
        material: Array.isArray(materials)
          ? [...arrWait, ...processingArr, ...processedArr]
          : materials,
      };

    case PHOTO_START:
      return {
        ...state,
        loading: true,
      };

    case PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        photo: action.payload.message,
      };

    case VIDEO_START:
      return {
        ...state,
        loading: true,
      };

    case VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: action.payload.message,
      };

    case AUDIO_START:
      return {
        ...state,
        loading: true,
      };

    case AUDIO_SUCCESS:
      return {
        ...state,
        loading: false,
        audio: action.payload.message,
      };

    case DOCUMENT_START:
      return {
        ...state,
        loading: true,
      };

    case DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        document: action.payload.message,
      };

    default:
      return state;
  }
}

export const getMaterial = () => {
  return (dispatch) => {
    dispatch({
      type: MATERIAL_START,
    });

    api
      .get('/user/contribution/all')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: MATERIAL_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getReadyMaterial = () => {
  return (dispatch) => {
    dispatch({
      type: READY_START,
    });

    api
      .get('/user/contribution/material')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: READY_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getPhoto = () => {
  return (dispatch) => {
    dispatch({
      type: PHOTO_START,
    });

    api
      .get('/user/contribution/photo')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PHOTO_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getVideo = () => {
  return (dispatch) => {
    dispatch({
      type: VIDEO_START,
    });

    api
      .get('/user/contribution/video')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: VIDEO_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getAudio = () => {
  return (dispatch) => {
    dispatch({
      type: AUDIO_START,
    });

    api
      .get('/user/contribution/audio')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: AUDIO_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getDocument = () => {
  return (dispatch) => {
    dispatch({
      type: DOCUMENT_START,
    });

    api
      .get('/user/contribution/document')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DOCUMENT_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getShowMaterial = (id) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_START,
    });

    api
      .get(`/user/contribution/material/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: SHOW_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
