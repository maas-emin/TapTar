import { api } from '../../api/api';
import {
  CHANGED_IS_MATERIAL,
  CHANGE_MATERIAL_BOOKMARK,
  CHANGE_TEXT,
  CHANGE_TITLE,
  DRAFT_CHANGE_ERROR,
  DRAFT_GET_ERROR,
  DRAFT_GET_START,
  DRAFT_GET_SUCCESS,
  MATERIA_POST_ERROR,
  MATERIA_POST_START,
  MATERIA_POST_SUCCESS,
  ONE_CHANGE_START,
  ONE_CHANGE_SUCCESS,
  ONE_UPLOAD_START,
  ONE_UPLOAD_SUCCESS,
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
} from '../ducks/historianSendMaterial';

// Файлы
export const uploadTextHistorian = (
  name,
  year,
  author,
  place,
  comment,
  bookmark,
  albums,
  centuries,
  types,
  file,
  effects,
  credibility,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TEXT_UPLOAD_START });

      const response = await api.post('/cabinet/material/send/draft/text', {
        text: file,
        title: name,
        year,
        author,
        location: place,
        comment,
        tags_century: centuries,
        tags_information: types,
        tags_credibility: credibility,
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
        bookmark,
        albums,
        centuries,
        types,
        effects,
        credibility,
      });
    } catch (e) {
      console.error(e.response.data);
    }
  };
};

export const uploadFileHistorian = (
  file,
  format,
  name,
  year,
  author,
  place,
  comment,
  bookmark,
  albums,
  centuries,
  types,
  effects,
  credibility,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ONE_UPLOAD_START });

      const response = await api.post(
        `/cabinet/material/send/draft/edit/file/${file.id}`,
        {
          title: name,
          year,
          author,
          location: place,
          comment,
          tags_century: centuries,
          tags_information: types,
          tags_credibility: credibility,
        },
      );
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
        bookmark,
        albums,
        centuries,
        types,
        effects,
        credibility,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const removeFileHistorian = (file) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_FILE_START,
      });

      const response = await api.delete(
        `/cabinet/material/send/draft/file/${file.id}`,
      );
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

export const getHistorianDraftFiles = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DRAFT_GET_START,
      });

      const response = await api.get('/cabinet/material/send/drafts');
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

export const setTextHistorian = (
  title,
  year,
  author,
  location,
  comment,
  bookmark,
  albums,
  centuryClient,
  informationClient,
  text,
  effects,
  credibilityClient,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TEXT_CHANGE_START });

      const response = await api.post(
        `/cabinet/material/send/draft/edit/text/${text.id}`,
        {
          text: text.text,
          title,
          year,
          author,
          location,
          comment,
          tags_century: centuryClient,
          tags_information: informationClient,
          tags_credibility: credibilityClient,
        },
      );
      dispatch({
        type: TEXT_CHANGE_SUCCESS,
        data: response.data,
        title,
        year,
        author,
        location,
        comment,
        bookmark,
        albums,
        centuryClient,
        informationClient,
        text,
        effects,
        credibilityClient,
      });
    } catch (e) {
      console.error(e.response.data);
    }
  };
};

export const changeHistorianFile = (
  id,
  format,
  title,
  year,
  author,
  location,
  comment,
  bookmark,
  albums,
  centuryClient,
  informationClient,
  effects,
  credibilityClient,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ONE_CHANGE_START });

      const response = await api.post(
        `/cabinet/material/send/draft/edit/file/${id}`,
        {
          title,
          year,
          author,
          location,
          comment,
          tags_century: centuryClient,
          tags_information: informationClient,
          tags_credibility: credibilityClient,
        },
      );
      dispatch({
        type: ONE_CHANGE_SUCCESS,
        data: response.data,
        id,
        format,
        title,
        year,
        author,
        location,
        comment,
        bookmark,
        albums,
        centuryClient,
        informationClient,
        effects,
        credibilityClient,
      });
    } catch (e) {
      console.error(e.response);
    }
  };
};

// api/user/add/material/send

export const postHistorianMaterial = (
  bookmark,
  is_material,
  title,
  text,
  photo,
  document,
  audio,
  video,
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: MATERIA_POST_START });

      if (text.text === undefined) {
        const response = await api.post('/cabinet/material/send', {
          bookmark,
          is_material,
          title,
          photo,
          document,
          audio,
          video,
        });
        dispatch({
          type: MATERIA_POST_SUCCESS,
          data: response.data,
        });
      } else {
        const response = await api.post('/cabinet/material/send', {
          bookmark,
          is_material,
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
      }
    } catch (e) {
      console.error(e);
      dispatch({
        type: MATERIA_POST_ERROR,
      });
    }
  };
};

export const setHistorianSendError = () => {
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

      const response = await api.delete(
        `/cabinet/material/send/draft/text/${id}`,
      );
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

export const changedIsMaterialHistorian = () => {
  return {
    type: CHANGED_IS_MATERIAL,
  };
};

export const changeBookmarkMaterial = () => {
  return {
    type: CHANGE_MATERIAL_BOOKMARK,
  };
};
