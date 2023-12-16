import { api } from '../../api/api';
import {
  CHANGE_TEXT,
  CHANGE_TITLE,
  DRAFT_CHANGE_ERROR,
  DRAFT_GET_ERROR,
  DRAFT_GET_START,
  DRAFT_GET_SUCCESS,
  GROUP_CHANGE_START,
  GROUP_CHANGE_SUCCESS,
  GROUP_UPLOAD_START,
  GROUP_UPLOAD_SUCCESS,
  MATERIA_POST_ERROR,
  MATERIA_POST_START,
  MATERIA_POST_SUCCESS,
  ONE_CHANGE_START,
  ONE_CHANGE_SUCCESS,
  ONE_UPLOAD_START,
  ONE_UPLOAD_SUCCESS,
  REMOVE_FILES_START,
  REMOVE_FILES_SUCCESS,
  REMOVE_FILE_START,
  REMOVE_FILE_SUCCESS,
  SEND_ERROR_CHANGE,
  TEXT_CHANGE_START,
  TEXT_CHANGE_SUCCESS,
  TEXT_CLEAR,
  TEXT_DELETE_START,
  TEXT_DELETE_SUCCESS,
  TEXT_UPLOAD_START,
  TEXT_UPLOAD_SUCCESS,
} from '../ducks/userSendMaterial';

// Файлы
export const uploadTextFile = (
  name,
  year,
  author,
  place,
  comment,
  centuries,
  types,
  file,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TEXT_UPLOAD_START });

      const response = await api.post('user/draft/text', {
        text: file,
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
      });
      dispatch({
        type: TEXT_UPLOAD_SUCCESS,
        data: response.data,
        payload: file,
        name,
        year,
        author,
        place,
        comment,
        centuries,
        types,
      });
    } catch (e) {
      console.error(e.response.data);
    }
  };
};

export const uploadOneFile = (
  file,
  format,
  name,
  year,
  author,
  place,
  comment,
  centuries,
  types,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ONE_UPLOAD_START });
      const response = await api.post(`user/draft/edit/file/${file.id}`, {
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
      });
      dispatch({
        type: ONE_UPLOAD_SUCCESS,
        data: response.data,
        payload: file,
        format,
        name,
        year,
        author,
        place,
        comment,
        centuries,
        types,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const uploadGroupFiles = (
  file,
  format,
  name,
  year,
  author,
  place,
  comment,
  centuries,
  types,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GROUP_UPLOAD_START });

      const response = await api.post(`user/draft/edit/group/${file.group}`, {
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
      });
      dispatch({
        type: GROUP_UPLOAD_SUCCESS,
        data: response.data,
        payload: file,
        format,
        name,
        year,
        author,
        place,
        comment,
        centuries,
        types,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const removeFiles = (files) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_FILES_START,
      });

      const response = await api.delete(
        `/user/draft/group/${files.group_uid || files.group}`,
      );
      dispatch({
        type: REMOVE_FILES_SUCCESS,
        payload: files,
        data: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const removeFile = (file) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_FILE_START,
      });

      const response = await api.delete(`/user/draft/file/${file.id}`);
      dispatch({
        type: REMOVE_FILE_SUCCESS,
        payload: file,
        data: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const getDraftFiles = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DRAFT_GET_START,
      });

      const response = await api.get('user/drafts');
      dispatch({
        type: DRAFT_GET_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: DRAFT_GET_ERROR,
      });
    }
  };
};

export const setDraftError = () => {
  return {
    type: DRAFT_CHANGE_ERROR,
  };
};

//Изменение принадлежностей файлов

export const changeTextFile = (
  file,
  name,
  year,
  author,
  place,
  comment,
  centuries,
  types,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TEXT_CHANGE_START });

      const response = await api.post(`/user/draft/edit/text/${file.id}`, {
        text: file.text,
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
      });
      dispatch({
        type: TEXT_CHANGE_SUCCESS,
        data: response.data,
        name,
        year,
        author,
        place,
        comment,
        centuries,
        types,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeOneFile = (
  id,
  format,
  name,
  year,
  author,
  place,
  comment,
  centuries,
  types,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ONE_CHANGE_START });

      const response = await api.post(`/user/draft/edit/file/${id}`, {
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
      });
      dispatch({
        type: ONE_CHANGE_SUCCESS,
        data: response.data,
        name,
        year,
        author,
        place,
        comment,
        centuries,
        types,
        format,
        id,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeGroupFiles = (
  format,
  group,
  name,
  year,
  author,
  place,
  comment,
  centuries,
  types,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GROUP_CHANGE_START });

      const response = await api.post(`/user/draft/edit/group/${group}`, {
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
      });
      dispatch({
        type: GROUP_CHANGE_SUCCESS,
        data: response.data,
        name,
        year,
        author,
        place,
        comment,
        centuries,
        types,
        group,
        format,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

// api/user/add/material/send

export const postMaterial = (title, text, photo, document, video, audio) => {
  return async (dispatch) => {
    try {
      dispatch({ type: MATERIA_POST_START });

      const response = await api.post('/user/contribution/material/send', {
        title,
        text,
        photo,
        document,
        audio,
        video,
      });
      dispatch({
        type: MATERIA_POST_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: MATERIA_POST_ERROR,
      });
    }
  };
};

export const setSendError = () => {
  return {
    type: SEND_ERROR_CHANGE,
  };
};

// Тексты
export const changeTitle = (value) => {
  return {
    type: CHANGE_TITLE,
    payload: value,
  };
};

export const changeText = (value) => {
  return {
    type: CHANGE_TEXT,
    payload: value,
  };
};

//Удаление текста с сервера

export const deleteDraftText = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TEXT_DELETE_START });

      const response = await api.delete(`/user/draft/text/${id}`);
      dispatch({
        type: TEXT_DELETE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const clearTextForm = () => {
  return {
    type: TEXT_CLEAR,
  };
};
