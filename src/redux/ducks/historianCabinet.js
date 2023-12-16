import { api } from '../../api/api';

export const MATERIAL_START = 'bookmark/materials/load/start';
export const MATERIAL_SUCCESS = 'bookmark/materials/load/success';
export const PHOTO_START = 'bookmark/photo/load/start';
export const PHOTO_SUCCESS = 'bookmark/photo/load/success';
export const VIDEO_START = 'bookmark/video/load/start';
export const VIDEO_SUCCESS = 'bookmark/video/load/success';
export const AUDIO_START = 'bookmark/audio/load/start';
export const AUDIO_SUCCESS = 'bookmark/audio/load/success';
export const DOCUMENT_START = 'bookmark/document/load/start';
export const DOCUMENT_SUCCESS = 'bookmark/document/load/success';

export const FILE_DELETE_START = 'bookmark/file/delete/start';
export const FILE_DELETE_SUCCESS = 'bookmark/file/delete/success';

const initialState = {
  materials: [],
  loading: false,
  error: '',
};

export default function historianCabinet(state = initialState, action) {
  switch (action.type) {
    case MATERIAL_START:
      return {
        ...state,
        loading: true,
      };

    case MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        materials: action.payload.message,
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
        materials: action.payload.message,
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
        materials: action.payload.message,
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
        materials: action.payload.message,
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
        materials: action.payload.message,
      };

    case FILE_DELETE_SUCCESS:
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material.id !== action.payload,
        ),
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
      .get('/cabinet/bookmark/material')
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

export const getPhoto = () => {
  return (dispatch) => {
    dispatch({
      type: PHOTO_START,
    });

    api
      .get('/cabinet/bookmark/photo')
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
      .get('/cabinet/bookmark/video')
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
      .get('/cabinet/bookmark/audio')
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
      .get('/cabinet/bookmark/document')
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

export const deleteCabinetFile = (bookmark_id) => {
  return (dispatch) => {
    dispatch({
      type: FILE_DELETE_START,
    });

    api
      .delete(`cabinet/bookmark/${bookmark_id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FILE_DELETE_SUCCESS,
          payload: bookmark_id,
          data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
