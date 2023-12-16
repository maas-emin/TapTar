import { api } from '../../api/api';

export const FILE_START = 'bookmark/file/load/start';
export const FILE_SUCCESS = 'bookmark/file/load/success';

export const FILE_DELETE_START = 'bookmark/file/delete/start';
export const FILE_DELETE_SUCCESS = 'bookmark/file/delete/success';

const OPEN_MATERIAL_DIALOG = 'bookmark/file/open/success';

export const CLOSE_BOOKMARK_DIALOG = 'bookmark/dialog/close';

const initialState = {
  open: false,
  file: {},
  loading: false,
  error: '',
};

export default function showFileCabinet(state = initialState, action) {
  switch (action.type) {
    case FILE_START:
      return {
        ...state,
        open: true,
        loading: true,
      };

    case FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        file: action.payload.message,
      };

    case OPEN_MATERIAL_DIALOG:
      return {
        ...state,
        open: true,
        file: action.payload,
      };

    case CLOSE_BOOKMARK_DIALOG:
      return {
        ...state,
        open: false,
        file: {},
        loading: false,
        error: '',
      };

    default:
      return state;
  }
}

export const getCabinetFile = (id) => {
  return (dispatch) => {
    dispatch({
      type: FILE_START,
    });

    api
      .get(`cabinet/bookmark/file/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FILE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const getContributionFile = (id) => {
  return (dispatch) => {
    dispatch({
      type: FILE_START,
    });

    api
      .get(`/user/contribution/file/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FILE_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const openMaterialFileDialog = (item) => {
  return {
    type: OPEN_MATERIAL_DIALOG,
    payload: item,
  };
};

export const closeBookmarkDialog = () => {
  return {
    type: CLOSE_BOOKMARK_DIALOG,
  };
};
