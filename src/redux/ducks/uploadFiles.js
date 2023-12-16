import { api } from '../../api/api';

const FILES_UPLOAD_START = 'files/post/start';
const FILES_UPLOAD_SUCCESS = 'files/post/success';
const TEXT_POST = 'text/post';
const FILES_UPLOAD_ERROR = 'files/post/error';
const CHANGE_PROGRESS = 'change/upload/progress';
const PROGRESS_ERROR_CHANGE = 'progress/error/change';
const DELETE_UPLOAD_FILE_START = 'delete/file/upload/start';
const DELETE_UPLOAD_FILE_SUCCESS = 'delete/file/upload/success';
const CLEAN_UPLOAD_FILES = 'clean/uploadFiles';

const initialState = {
  open: false,
  loading: false,
  progress: 0,
  error: false,
  files: {},
};

export default function uploadFiles(state = initialState, action) {
  switch (action.type) {
    case FILES_UPLOAD_START:
      return {
        ...state,
        open: true,
        loading: true,
      };

    case FILES_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        files: action.payload.message,
        progress: 0,
      };

    case TEXT_POST:
      return {
        ...state,
        open: true,
        files: {
          text: action.payload,
          type: 'text',
        },
      };

    case CHANGE_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };

    case CLEAN_UPLOAD_FILES:
      return {
        ...state,
        open: false,
        loading: false,
        progress: 0,
        files: {},
      };

    case FILES_UPLOAD_ERROR:
      return {
        ...state,
        error: true,
        progress: 0,
      };

    case DELETE_UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        files: {
          ...state.files,
          files: state.files.files.filter((file) => file.id !== action.payload),
        },
      };

    case PROGRESS_ERROR_CHANGE:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}

export const postFail = (file, format) => {
  const form = new FormData();
  form.append('file', file);
  form.append('type', format);

  return (dispatch) => {
    dispatch({ type: FILES_UPLOAD_START });

    api
      .post('/user/draft/file', form, {
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
              type: CHANGE_PROGRESS,
              payload: progress,
            });
          }
        },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FILES_UPLOAD_SUCCESS,
          payload: data,
          format,
        });
      })
      .catch((e) => {
        console.error(e);
        dispatch({
          type: FILES_UPLOAD_ERROR,
        });
      });
  };
};

export const postFilesGroup = (files, format, causes) => {
  const form = new FormData();
  form.append('type', format);
  for (let i = 0; i < files.length; i++) {
    form.append(`files[${i}]`, files[i]);
  }

  for (let i = 0; i < causes.length; i++) {
    form.append(`causes[${i}]`, causes[i]);
  }

  return (dispatch) => {
    dispatch({ type: FILES_UPLOAD_START });

    api
      .post('/user/draft/group', form, {
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
              type: CHANGE_PROGRESS,
              payload: progress,
            });
          }
        },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FILES_UPLOAD_SUCCESS,
          payload: data,
          format,
        });
      })
      .catch((e) => {
        dispatch({
          type: FILES_UPLOAD_ERROR,
        });
        console.error(e);
      });
  };
};

export const postFileHistorian = (file, format) => {
  const form = new FormData();
  form.append('file', file);
  form.append('type', format);

  return (dispatch) => {
    dispatch({ type: FILES_UPLOAD_START, file, format });

    api
      .post('/cabinet/material/send/draft/file', form, {
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
              type: CHANGE_PROGRESS,
              payload: progress,
            });
          }
        },
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FILES_UPLOAD_SUCCESS,
          payload: data,
          format,
        });
      })
      .catch((e) => {
        console.error(e);
        dispatch({
          type: FILES_UPLOAD_ERROR,
        });
      });
  };
};

export const postText = (text) => {
  return {
    type: TEXT_POST,
    payload: text,
  };
};

export const cleanUploadFiles = () => {
  return {
    type: CLEAN_UPLOAD_FILES,
  };
};

export const changeProgressError = () => {
  return {
    type: PROGRESS_ERROR_CHANGE,
  };
};

export const deleteFileUpload = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_UPLOAD_FILE_START,
      payload: id,
    });

    api
      .delete(`/user/draft/file/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DELETE_UPLOAD_FILE_SUCCESS,
          payload: id,
          data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
