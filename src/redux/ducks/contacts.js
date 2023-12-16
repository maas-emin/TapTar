import { api } from '../../api/api';
import { CLOSE_DIALOG_DELETE_CHAT } from './application';

const CONTACT_DELETE_START = 'contact/delete/start';
const CONTACT_DELETE_SUCCESS = 'contact/delete/success';
const CONTACT_DELETE_ERROR = 'contact/delete/error';
const CHANGE_ERROR = 'change/error';

const initialState = {
  contacts: [],
  countNewChat: 0,
  loading: false,
  filter: '',
  error: {
    status: false,
    message: '',
  },
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'contacts/load/success':
      return {
        ...state,
        contacts: action.payload.message,
        loading: false,
      };

    case 'count/load/success':
      return {
        ...state,
        countNewChat: action.payload.message,
        loading: false,
      };

    case 'filter/text':
      return {
        ...state,
        filter: action.payload,
      };

    case 'minus/messages':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload) {
            return {
              ...contact,
              count_new_messages: 0,
            };
          }

          return contact;
        }),
        countNewChat: state.countNewChat - action.count,
      };

    case 'plus/messages':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.roomId) {
            return {
              ...contact,
              count_new_messages: contact.count_new_messages + 1,
            };
          }

          return contact;
        }),
        countNewChat: state.countNewChat + 1,
      };

    case CONTACT_DELETE_START:
      return {
        ...state,
        loading: true,
      };

    case CONTACT_DELETE_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
        loading: false,
      };

    case CONTACT_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action.payload,
        },
      };

    case CHANGE_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          status: false,
          message: '',
        },
      };

    default:
      return state;
  }
}

export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });

    api
      .get('chat')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: 'contacts/load/success',
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const loadCountNewChat = () => {
  return (dispatch) => {
    dispatch({
      type: 'count/load/start',
    });

    api
      .get('/chat/new/count')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: 'count/load/success',
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const setFilter = (e) => {
  return {
    type: 'filter/text',
    payload: e,
  };
};

export const minusCountMessages = (id, count) => {
  return {
    type: 'minus/messages',
    payload: id,
    count,
  };
};

export const plusCountMessages = (data) => {
  return {
    type: 'plus/messages',
    payload: data,
  };
};

export const removingContact = (roomId, onPush) => {
  return (dispatch) => {
    dispatch({
      type: CONTACT_DELETE_START,
      roomId,
    });

    api
      .delete(`/chat/${roomId}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: CONTACT_DELETE_SUCCESS,
          payload: +roomId,
          data,
        });
        dispatch({
          type: CLOSE_DIALOG_DELETE_CHAT,
        });
        onPush();
      })
      .catch((e) => {
        dispatch({
          type: CONTACT_DELETE_ERROR,
          payload: e.response.data.message,
        });
      });
  };
};

export const changeDeleteError = () => {
  return {
    type: CHANGE_ERROR,
  };
};
