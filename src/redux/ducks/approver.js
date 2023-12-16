import { api } from '../../api/api';

const NEW_MATERIALS_LOAD_START = 'new/approver/load/start ';
const NEW_MATERIALS_LOAD_SUCCESS = 'new/approver/load/success';

const PROCESSED_MATERIALS_LOAD_START = 'processed/approver/load/start ';
const PROCESSED_MATERIALS_LOAD_SUCCESS = 'processed/approver/load/success';

const BLOCKED_MATERIALS_LOAD_START = 'blocked/approver/load/start ';
const BLOCKED_MATERIALS_LOAD_SUCCESS = 'blocked/approver/load/success';

const NEW_MATERIAL_LOAD_START = 'show/new/approver/load/start ';
const NEW_MATERIAL_LOAD_SUCCESS = 'show/new/approver/load/success';

const PROCESS_MATERIAL_LOAD_START = 'show/process/approver/load/start ';
const PROCESS_MATERIAL_LOAD_SUCCESS = 'show/process/approver/load/success';

const PROCESSED_MATERIAL_LOAD_START = 'show/processed/approver/load/start ';
const PROCESSED_MATERIAL_LOAD_SUCCESS = 'show/processed/approver/load/success';

const PROCESS_MATERIALS_LOAD_START = 'process/approver/load/start ';
const PROCESS_MATERIALS_LOAD_SUCCESS = 'process/approver/load/success';

const ADD_PROCESS_LOAD_START = 'approver/process/add/load/start';
const ADD_PROCESS_LOAD_SUCCESS = 'approver/process/add/load/success';

const DELETE_PROCESS_LOAD_START = 'approver/process/delete/load/start';
const DELETE_PROCESS_LOAD_SUCCESS = 'approver/process/delete/load/success';

const SEND_PROCESS_LOAD_START = 'approver/process/send/load/start';
const SEND_PROCESS_LOAD_SUCCESS = 'approver/process/send/load/success';

const REJECT_PROCESS_LOAD_START = 'approver/process/reject/load/start';
const REJECT_PROCESS_LOAD_SUCCESS = 'approver/process/reject/load/success';

const initialState = {
  message: '',
  materials: [],
  material: {
    id: '',
    isMaterial: null,
    process_id: null,
    process_status: null,
    title: '',
    user_id: null,
    processed: null,
    group_hash: null,
    files: {
      text: {},

      photo: [],

      audio: [],

      document: [],

      video: [],
    },
  },
  file: null,
  loading: true,
};

export default function incomingMaterials(state = initialState, action) {
  switch (action.type) {
    // Получение новых материалов
    case NEW_MATERIALS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case NEW_MATERIALS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        materials: action.payload.message,
      };
    // Получение обработанного материалов
    case PROCESSED_MATERIALS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case PROCESSED_MATERIALS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        materials: action.payload.message,
      };

    // Получение отклоненного материалов
    case BLOCKED_MATERIALS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case BLOCKED_MATERIALS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        materials: action.payload.message,
      };

    // Получение обрабатываемых материалов
    case PROCESS_MATERIALS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case PROCESS_MATERIALS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        materials: action.payload.message,
      };

    // Получение нового материала
    case NEW_MATERIAL_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case NEW_MATERIAL_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        material: {
          id: action.payload.message.material.id,
          isMaterial: action.payload.message.material.is_material,
          process_id: action.payload.message.process_id,
          process_status: action.payload.message.process_status,
          title: action.payload.message.material.title,
          user_id: action.payload.message.material.user_id,
          files: {
            text: action.payload.message.material.files.text,

            photo: action.payload.message.material.files.photo,

            audio: action.payload.message.material.files.audio,

            document: action.payload.message.material.files.document,

            video: action.payload.message.material.files.video,
          },
        },
      };

    //Получение обрабатываемого материала
    case PROCESS_MATERIAL_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case PROCESS_MATERIAL_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        material: {
          id: action.payload.message.material.id,
          isMaterial: action.payload.message.material.is_material,
          process_id: action.payload.message.process_id,
          process_status: action.payload.message.process_status,
          title: action.payload.message.material.title,
          user_id: action.payload.message.material.user_id,
          files: {
            text: action.payload.message.material.files.text,

            photo: action.payload.message.material.files.photo,

            audio: action.payload.message.material.files.audio,

            document: action.payload.message.material.files.document,

            video: action.payload.message.material.files.video,
          },
        },
      };

    //Получение обработаного материала
    case PROCESSED_MATERIAL_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case PROCESSED_MATERIAL_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        material: {
          id: action.payload.message.material.id,
          isMaterial: action.payload.message.material.is_material,
          process_id: action.payload.message.process_id,
          process_status: action.payload.message.process_status,
          title: action.payload.message.material.title,
          user_id: action.payload.message.material.user_id,
          files: {
            text: action.payload.message.material.files.text,

            photo: action.payload.message.material.files.photo,

            audio: action.payload.message.material.files.audio,

            document: action.payload.message.material.files.document,

            video: action.payload.message.material.files.video,
          },
        },
      };

    // добавление материала в обрабатываемые
    case ADD_PROCESS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case ADD_PROCESS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        material: {
          ...state.material,
          process_status: 1,
        },
      };

    // Удаление материала из обрабатываемые
    case DELETE_PROCESS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PROCESS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        material: {
          ...state.material,
          process_status: 0,
        },
      };

    default:
      return state;
  }
}

//Получение новых материалов
export const getNewMaterialsApprover = () => {
  return (dispatch) => {
    dispatch({
      type: NEW_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/approve/list/new')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: NEW_MATERIALS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
//Получение обрабатываемого материалов
export const getProcessMaterialsApprover = () => {
  return (dispatch) => {
    dispatch({
      type: PROCESS_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/approve/list/processing')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PROCESS_MATERIALS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Получение Обработанных материалов
export const getProcessedMaterialsApprover = () => {
  return (dispatch) => {
    dispatch({
      type: PROCESSED_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/approve/list/processed')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PROCESSED_MATERIALS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Просмотр нового материала
export const showNewMaterialApprover = (id) => {
  return (dispatch) => {
    dispatch({
      type: NEW_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/approve/new/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: NEW_MATERIAL_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Просмотр обрабатываемого материала
export const showProcessMaterialApprover = (id) => {
  return (dispatch) => {
    dispatch({
      type: PROCESS_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/approve/process/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PROCESS_MATERIAL_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Просмотр обработанного материала
export const showProcessedMaterialApprover = (id) => {
  return (dispatch) => {
    dispatch({
      type: PROCESSED_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/approve/processed/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: PROCESSED_MATERIAL_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

// Добавление материала в обрабатываемые

export const addMaterialInProcessApprover = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PROCESS_LOAD_START,
      id,
    });

    api
      .post(`/cabinet/approve/process/${id}/add`, { id })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: ADD_PROCESS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

// Добавление материала в новые

export const deleteMaterialOfProcessApprover = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PROCESS_LOAD_START,
      id,
    });

    api
      .delete(`/cabinet/approve/process/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DELETE_PROCESS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Отправка материала

export const SendMaterialOfProcessApprover = (material) => {
  return (dispatch) => {
    dispatch({
      type: SEND_PROCESS_LOAD_START,
      material,
    });

    api
      .put(`/cabinet/approve/process/${material.process_id}`, {
        approve: true,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: SEND_PROCESS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const rejectMaterialOfProcessApprover = (material, cause) => {
  return (dispatch) => {
    dispatch({
      type: REJECT_PROCESS_LOAD_START,
      material,
    });

    api
      .put(`/cabinet/approve/process/${material.process_id}`, {
        approve: false,
        cause: cause,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: REJECT_PROCESS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
