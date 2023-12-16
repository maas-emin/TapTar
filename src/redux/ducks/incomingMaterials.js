import { api } from '../../api/api';

const NEW_MATERIALS_LOAD_START = 'new/materials/load/start ';
const NEW_MATERIALS_LOAD_SUCCESS = 'new/materials/load/success';

const SAVE_MATERIAL_START = 'material/save/start ';
const SAVE_MATERIAL_SUCCESS = 'material/save/success';

const PROCESSED_MATERIALS_LOAD_START = 'processed/materials/load/start ';
const PROCESSED_MATERIALS_LOAD_SUCCESS = 'processed/materials/load/success';

const BLOCKED_MATERIALS_LOAD_START = 'blocked/materials/load/start ';
const BLOCKED_MATERIALS_LOAD_SUCCESS = 'blocked/materials/load/success';

const NEW_MATERIAL_LOAD_START = 'show/new/material/load/start ';
const NEW_MATERIAL_LOAD_SUCCESS = 'show/new/material/load/success';

const PROCESS_MATERIAL_LOAD_START = 'show/process/material/load/start ';
const PROCESS_MATERIAL_LOAD_SUCCESS = 'show/process/material/load/success';

const PROCESSED_MATERIAL_LOAD_START = 'show/processed/material/load/start ';
const PROCESSED_MATERIAL_LOAD_SUCCESS = 'show/processed/material/load/success';

const BLOCKED_MATERIAL_LOAD_START = 'show/blocked/material/load/start ';
const BLOCKED_MATERIAL_LOAD_SUCCESS = 'show/blocked/material/load/success';

const PROCESS_MATERIALS_LOAD_START = 'process/materials/load/start ';
const PROCESS_MATERIALS_LOAD_SUCCESS = 'process/materials/load/success';

const ADD_PROCESS_LOAD_START = 'process/add/load/start';
const ADD_PROCESS_LOAD_SUCCESS = 'process/add/load/success';

const REJECT_PROCESS_LOAD_START = 'process/reject/load/start';
const REJECT_PROCESS_LOAD_SUCCESS = 'process/reject/load/success';

const DELETE_PROCESS_LOAD_START = 'process/delete/load/start';
const DELETE_PROCESS_LOAD_SUCCESS = 'process/delete/load/success';

const SEND_PROCESS_LOAD_START = 'process/send/load/start';
const SEND_PROCESS_LOAD_SUCCESS = 'process/send/load/success';

const PROCESS__MATERIAL = 'process/material';

const BOOKMARK__MATERIAL = 'bookmark/material';

const BOOKMARK__FILE = 'bookmark/file';

const DELETE_FILE_START = 'delete/file/start';
const DELETE_FILE_SUCCESS = 'delete/file/success';

const DELETE_MATERIAl_START = 'delete/material/start';
const DELETE_MATERIAL_SUCCESS = 'delete/material/success';

const DELETE_FILE_GROUP_START = 'delete/file/group/start';
const DELETE_FILE_GROUP_SUCCESS = 'delete/file/group/success';

const CHANGED_IS_MATERIAL = 'changed/isMaterial';

const CHANGED_INCOMING_TITLE = 'change/incomingMaterial/title';
export const DELETE_REJECT = 'delete/reject';

const initialState = {
  message: '',
  materials: [],
  reject: null,
  material: {
    id: '',
    isMaterial: null,
    process_id: null,
    process_status: null,
    title: '',
    user_id: null,
    processed: null,
    bookmark: null,
    group_uid: null,
    albums: [],
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
          bookmark: action.payload.message.material.bookmark,
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
          bookmark: action.payload.message.material.bookmark,
          room_id: action.payload.message.room_id,
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
          bookmark: action.payload.message.material.bookmark,
          files: {
            text: action.payload.message.material.files.text,

            photo: action.payload.message.material.files.photo,

            audio: action.payload.message.material.files.audio,

            document: action.payload.message.material.files.document,

            video: action.payload.message.material.files.video,
          },
        },
      };

    //Получение блокированного материала
    case BLOCKED_MATERIAL_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case BLOCKED_MATERIAL_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        reject: action.payload.message.reject,
        material: {
          id: action.payload.message.material.id,
          // isMaterial: action.payload.message.material.is_material,
          process_id: action.payload.message.process_id,
          // process_status: action.payload.message.process_status,
          title: action.payload.message.material.title,
          user_id: action.payload.message.material.user_id,
          // bookmark: action.payload.message.material.bookmark,
          files: {
            text: action.payload.message.material.files.text,

            photo: action.payload.message.material.files.photo,

            audio: action.payload.message.material.files.audio,

            document: action.payload.message.material.files.document,

            video: action.payload.message.material.files.video,
          },
        },
      };

    //Title Material
    case CHANGED_INCOMING_TITLE:
      return {
        ...state,
        material: {
          ...state.material,
          title: action.payload,
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
          process_status: 'processing',
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
          process_status: 'wait',
        },
      };

    // Отправка материала из обрабатываемые
    case SEND_PROCESS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case SEND_PROCESS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        material: {
          ...state.material,
          process_status: 'processed',
        },
      };

    // Сохранение материала обрабатываемые
    case SAVE_MATERIAL_START:
      return {
        ...state,
        loading: true,
      };

    case SAVE_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    // Удаление материала
    case DELETE_MATERIAl_START:
      return {
        ...state,
        loading: true,
      };

    case DELETE_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    //Обработка материала
    case PROCESS__MATERIAL:
      if (action.files.type === 'text') {
        return {
          ...state,
          material: {
            ...state.material,
            files: {
              ...state.material.files,
              text: {
                ...state.material.files.text,
                title: action.name,
                year: action.year,
                author: action.author,
                location: action.location,
                comment: action.comment,
                text: action.files.text,
                tags_century: action.century,
                tags_information: action.information,
                tags_credibility: action.credibility,
                effects: action.effects,
                bookmark: action.bookmark,
                albums: action.albums,
                processed: true,
              },
            },
          },
        };
      }

      return {
        ...state,
        material: {
          ...state.material,
          files: {
            ...state.material.files,
            [action.files.type]: state.material.files[action.files.type].map(
              (item) => {
                if (item.id === action.files.id) {
                  return {
                    ...item,
                    title: action.name,
                    year: action.year,
                    author: action.author,
                    location: action.location,
                    comment: action.comment,
                    tags_century: action.century,
                    tags_information: action.information,
                    tags_credibility: action.credibility,
                    effects: action.effects,
                    bookmark: action.bookmark,
                    albums: action.albums,
                    processed: true,
                  };
                }

                return item;
              },
            ),
          },
        },
      };

    //Удаление файла
    case DELETE_FILE_SUCCESS:
      if (action.format === 'text') {
        return {
          ...state,
          material: {
            ...state.material,
            files: {
              ...state.material.files,
              text: {
                processed: false,
                text: '',
                title: '',
              },
            },
          },
        };
      }

      return {
        ...state,
        material: {
          ...state.material,
          files: {
            ...state.material.files,
            [action.format]: state.material.files[action.format].filter(
              (item) => item.id !== action.id,
            ),
          },
        },
      };

    // Удаление файла из группы
    case DELETE_FILE_GROUP_SUCCESS:
      return {
        ...state,
        material: {
          ...state.material,
          files: {
            ...state.material.files,
            [action.format]: {
              ...state.material.files[action.format],
              group: state.material.files[action.format].group
                .map((item) => {
                  if (action.groupId === item.group_uid) {
                    return {
                      ...item,
                      files: item.files.filter((item) => item.id !== action.id),
                    };
                  }

                  return item;
                })
                .filter((item) => item.files.length !== 0),
            },
          },
        },
      };

    //Изменение целостности материала
    case CHANGED_IS_MATERIAL:
      return {
        ...state,
        material: {
          ...state.material,
          isMaterial: !state.material.isMaterial,
        },
      };

    //Изменение целостности материала
    case BOOKMARK__MATERIAL:
      return {
        ...state,
        material: {
          ...state.material,
          bookmark: !state.material.bookmark,
        },
      };

    case DELETE_REJECT:
      return {
        ...state,
        reject: null,
      };

    default:
      return state;
  }
}

//Получение новых материалов
export const getNewMaterials = () => {
  return (dispatch) => {
    dispatch({
      type: NEW_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/material/list/new')
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
export const getProcessMaterials = () => {
  return (dispatch) => {
    dispatch({
      type: PROCESS_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/material/list/processing')
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
export const getProcessedMaterials = () => {
  return (dispatch) => {
    dispatch({
      type: PROCESSED_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/material/list/processed')
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
//Получение отклоненных материалов
export const getBlockedMaterials = () => {
  return (dispatch) => {
    dispatch({
      type: BLOCKED_MATERIALS_LOAD_START,
    });

    api
      .get('/cabinet/material/list/blocked')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: BLOCKED_MATERIALS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Просмотр нового материала
export const showNewMaterial = (id) => {
  return (dispatch) => {
    dispatch({
      type: NEW_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/material/new/${id}`)
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
export const showProcessMaterial = (id) => {
  return (dispatch) => {
    dispatch({
      type: PROCESS_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/material/process/${id}`)
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

//Просмотр обрабатываемого материала
export const showProcessedMaterial = (id) => {
  return (dispatch) => {
    dispatch({
      type: PROCESSED_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/material/processed/${id}`)
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

//Просмотр перерабатывающего материала
export const showBlockedMaterial = (id) => {
  return (dispatch) => {
    dispatch({
      type: BLOCKED_MATERIAL_LOAD_START,
    });

    api
      .get(`/cabinet/material/reprocess/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: BLOCKED_MATERIAL_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

// Добавление материала в обрабатываемые

export const addMaterialInProcess = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PROCESS_LOAD_START,
      id,
    });

    api
      .post(`/cabinet/material/process/add`, { id })
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

// Добавление материала в обрабатываемые

export const rejectAddInProcess = (id) => {
  return (dispatch) => {
    dispatch({
      type: REJECT_PROCESS_LOAD_START,
      id,
    });

    api
      .post(`/cabinet/material/reprocess/${id}/add`, {})
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

// Добавление материала в новые

export const deleteMaterialOfProcess = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PROCESS_LOAD_START,
      id,
    });

    api
      .delete(`/cabinet/material/process/${id}/reject `)
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

//Обработка материала
export const ChangeIncomingMaterials = (
  files,
  bookmark,
  albums,
  name,
  year,
  author,
  location,
  comment,
  information,
  century,
  credibility,
  effects,
) => {
  return {
    type: PROCESS__MATERIAL,
    files,
    bookmark,
    albums,
    name,
    year,
    author,
    location,
    comment,
    information,
    century,
    credibility,
    effects,
  };
};

//Удаление фа1ла
export const deleteMaterialFile = (id, deleteState, format, process_id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FILE_START,
      id,
      deleteState,
      format,
    });

    api
      .post(`/cabinet/material/draft/${process_id}/file/${id}`, {
        causes: deleteState,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DELETE_FILE_SUCCESS,
          data,
          id,
          deleteState,
          format,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const deleteMaterial = (deleteState, process_id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_MATERIAl_START,
      deleteState,
    });

    api
      .post(`/cabinet/material/process/delete/${process_id}`, {
        causes: deleteState,
        comment: '',
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DELETE_MATERIAL_SUCCESS,
          data,
          deleteState,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Удаление фа1ла из группы
export const deleteMaterialFileGroup = (
  id,
  groupId,
  deleteState,
  format,
  amount,
  process_id,
) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FILE_GROUP_START,
      id,
      groupId,
      deleteState,
      format,
      amount,
    });

    api
      .post(`/cabinet/material/draft/${process_id}/file/${id}`, {
        causes: deleteState,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DELETE_FILE_GROUP_SUCCESS,
          data,
          id,
          deleteState,
          format,
          amount,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

//Удаление группы
export const deleteMaterialGroup = (
  id,
  deleteState,
  format,
  amount,
  process_id,
) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FILE_START,
      id,
      deleteState,
      format,
      amount,
    });

    api
      .post(`/cabinet/material/draft/${process_id}/group/${id}`, {
        causes: deleteState,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: DELETE_FILE_SUCCESS,
          data,
          id,
          deleteState,
          format,
          amount,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const changedIsMaterial = () => {
  return {
    type: CHANGED_IS_MATERIAL,
  };
};

export const changedIncomingMaterialTitle = (text) => {
  return {
    type: CHANGED_INCOMING_TITLE,
    payload: text,
  };
};

//Отправка материала

export const SendMaterialOfProcess = (material) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEND_PROCESS_LOAD_START,
        material,
      });

      if (material.files.text.text.length === 0) {
        const response1 = await api.put(
          `/cabinet/material/draft/${material.process_id}`,
          {
            title: material.title,
            is_material: material.isMaterial,
            bookmark: material.bookmark,
            files: {
              ...material.files,
              text: [],
            },
          },
        );
        if (response1.data.code === 200) {
          const response2 = await api.put(
            `/cabinet/material/process/${material.process_id}/send`,
            {},
          );
          dispatch({
            type: SEND_PROCESS_LOAD_SUCCESS,
            payload: response2.data,
          });
        }
      } else {
        const response1 = await api.put(
          `/cabinet/material/draft/${material.process_id}`,
          {
            title: material.title,
            is_material: material.isMaterial,
            bookmark: material.bookmark,
            files: material.files,
          },
        );
        if (response1.data.code === 200) {
          const response2 = await api.put(
            `/cabinet/material/process/${material.process_id}/send`,
            {},
          );
          dispatch({
            type: SEND_PROCESS_LOAD_SUCCESS,
            payload: response2.data,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

// Обновление материала

export const saveMaterialOfProcess = (id, material) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_MATERIAL_START,
      id,
    });
    if (material.files.text.text.length === 0) {
      api
        .put(`/cabinet/material/draft/${id}`, {
          title: material.title,
          is_material: material.isMaterial,
          bookmark: material.bookmark,
          files: {
            ...material.files,
            text: [],
          },
        })
        .then((response) => response.data)
        .then((data) => {
          dispatch({
            type: SAVE_MATERIAL_SUCCESS,
            payload: data,
          });
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      api
        .put(`/cabinet/material/draft/${id}`, {
          title: material.title,
          is_material: material.isMaterial,
          bookmark: material.bookmark,
          files: material.files,
        })
        .then((response) => response.data)
        .then((data) => {
          dispatch({
            type: SAVE_MATERIAL_SUCCESS,
            payload: data,
          });
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };
};

export const changeBookmarkMaterial = () => {
  return {
    type: BOOKMARK__MATERIAL,
  };
};

export const changeBookmarkFile = () => {
  return {
    type: BOOKMARK__FILE,
  };
};

export const deleteReject = () => {
  return {
    type: DELETE_REJECT,
  };
};
