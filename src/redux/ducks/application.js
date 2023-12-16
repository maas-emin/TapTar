import { api } from '../../api/api';
import { USERSEND_GROUP_FILE_DELETE } from './userSendMaterial';

const OPEN_DIALOG_CHAT_MATERIALS = 'chat/dialog/materials/open';
const CLOSE_DIALOG_CHAT_MATERIALS = 'chat/dialog/materials/close';
const OPEN_CHAT_HISTORIAN = 'open/chat/historian';
const CLOSE_CHAT_HISTORIAN = 'close/chat/historian';
const OPEN_DIALOG_DELETE_MESSAGE = 'message/dialog/delete/open';
const CLOSE_DIALOG_DELETE_MESSAGE = 'message/dialog/delete/close';
const OPEN_DIALOG_DELETE_CHAT = 'chat/dialog/delete/open';
export const CLOSE_DIALOG_DELETE_CHAT = 'chat/dialog/delete/close';
const OPEN_DIALOG_DELETE_BOOKMARK = 'bookmark/dialog/delete/open';
const CLOSE_DIALOG_DELETE_BOOKMARK = 'bookmark/dialog/delete/close';
const OPEN_MATERIAL_DELETE_BOOKMARK = 'bookmark/material/delete/open';
const CLOSE_MATERIAL_DELETE_BOOKMARK = 'bookmark/material/delete/close';
const OPEN_MATERIAL_POST_BOOKMARK = 'bookmark/material/post/open';
const CLOSE_MATERIAL_POST_BOOKMARK = 'bookmark/material/post/close';
const OPEN_DIALOG_DELETE_USER_SEND = 'userSend/dialog/delete/open';
const CLOSE_DIALOG_DELETE_USER_SEND = 'userSend/dialog/delete/close';
const SHOW_IMAGE_OPEN = 'show/image/open';
const SHOW_IMAGE_CLOSE = 'show/image/close';
const GET_AMOUNT_UPLOAD_OPEN = 'get/amount/upload/open';
const GET_AMOUNT_UPLOAD_CLOSE = 'get/amount/upload/close';
const GET_TAGS_UPLOAD_OPEN = 'get/tags/upload/open';
const GET_TAGS_UPLOAD_CLOSE = 'get/tags/upload/close';
const EDIT_PASS_OPEN = 'edit/pass/open';
const EDIT_PASS_CLOSE = 'edit/pass/close';
const EDIT_USER_OPEN = 'edit/user/open';
const EDIT_USER_CLOSE = 'edit/user/close';
const OPEN_CHANGE_FILES = 'open/change/files';
const CLOSE_CHANGE_FILES = 'close/change/files';
const OPEN_SHOW_FILES = 'open/show/files';
const CLOSE_SHOW_FILES = 'close/show/files';
const DELETE_GROUP_FILE_OPEN = 'delete/group/file/open';
const DELETE_GROUP_FILE_CLOSE = 'delete/group/file/close';
export const GROUP_FILE_DELETE_SUCCESS = 'group/file/delete/success';
export const GROUP_FILE_DELETE_START = 'group/file/delete/start';
const OPEN_APPROVER_MATERIAL = 'open/approver/material';
const CLOSE_APPROVER_MATERIAL = 'close/approver/material';
const OPEN_APPROVER_BUTTONS = 'open/approver/buttons';
const CLOSE_APPROVER_BUTTONS = 'close/approver/buttons';
const OPEN_APPROVER_REJECT = 'open/approver/reject';
const CLOSE_APPROVER_REJECT = 'close/approver/reject';

const OPEN_WORKPLACE_MATERIAL = 'open/workplace/material';
const CLOSE_WORKPLACE_MATERIAL = 'close/workplace/material';
const OPEN_WORKPLACE_MATERIAL_NEW = 'open/workplace/material/new';
const CLOSE_WORKPLACE_MATERIAL_NEW = 'close/workplace/material/new';
const OPEN_WORKPLACE_MATERIAL_PROCESS = 'open/workplace/material/process';
const CLOSE_WORKPLACE_MATERIAL_PROCESS = 'close/workplace/material/process';
const OPEN_WORKPLACE_BUTTONS = 'open/workplace/buttons';
const CLOSE_WORKPLACE_BUTTONS = 'close/workplace/buttons';
const OPEN_WORKPLACE_REJECT = 'open/workplace/reject';
const CLOSE_WORKPLACE_REJECT = 'close/workplace/reject';

const initialState = {
  deleteGroupFile: {
    open: false,
    file: null,
    group: null,
    group_uid: null,
  },
  changeFiles: {
    open: false,
    files: null,
  },
  approverMaterial: {
    open: false,
    files: null,
  },
  approverButtons: {
    open: false,
    status: null,
  },
  approverReject: false,
  workplaceMaterial: {
    open: false,
    files: null,
  },
  workplaceMaterialNew: {
    open: false,
    files: null,
  },
  workplaceMaterialProcess: {
    open: false,
    files: null,
  },
  workplaceButtons: {
    open: false,
    status: null,
  },
  workplaceReject: false,
  showFiles: {
    open: false,
    files: null,
  },
  dialogMaterials: false,
  bookmarkMaterial: false,
  postHistorianMaterial: false,
  chat: false,
  amountUploadFiles: {
    open: false,
    type: null,
  },
  tagsUploadFiles: {
    open: false,
    type: null,
  },
  editUserPass: false,
  editUser: false,
  showImage: {
    open: false,
    path: null,
  },
  deleteMessage: {
    open: false,
    messageId: null,
    roomId: null,
  },
  deleteChat: {
    open: false,
    roomId: null,
  },
  bookmarkDialog: {
    open: false,
    id: null,
  },
  userSendDelete: {
    open: false,
    files: null,
  },
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case OPEN_DIALOG_CHAT_MATERIALS:
      return {
        ...state,
        dialogMaterials: true,
      };

    case CLOSE_DIALOG_CHAT_MATERIALS:
      return {
        ...state,
        dialogMaterials: false,
      };

    case OPEN_CHAT_HISTORIAN:
      return {
        ...state,
        chat: true,
      };

    case CLOSE_CHAT_HISTORIAN:
      return {
        ...state,
        chat: false,
      };

    case GET_TAGS_UPLOAD_OPEN:
      return {
        ...state,
        tagsUploadFiles: {
          open: true,
          type: action.payload,
        },
      };

    case GET_TAGS_UPLOAD_CLOSE:
      return {
        ...state,
        tagsUploadFiles: {
          open: false,
          type: null,
        },
      };

    case DELETE_GROUP_FILE_OPEN:
      return {
        ...state,
        deleteGroupFile: {
          ...state.deleteGroupFile,
          open: true,
          file: action.payload,
        },
      };

    case DELETE_GROUP_FILE_CLOSE:
      return {
        ...state,
        deleteGroupFile: {
          ...state.deleteGroupFile,
          open: false,
          file: null,
        },
      };

    case EDIT_PASS_OPEN:
      return {
        ...state,
        editUserPass: true,
      };

    case EDIT_PASS_CLOSE:
      return {
        ...state,
        editUserPass: false,
      };

    case EDIT_USER_OPEN:
      return {
        ...state,
        editUser: true,
      };

    case EDIT_USER_CLOSE:
      return {
        ...state,
        editUser: false,
      };

    case SHOW_IMAGE_OPEN:
      return {
        ...state,
        showImage: {
          open: true,
          path: action.payload,
        },
      };

    case SHOW_IMAGE_CLOSE:
      return {
        ...state,
        showImage: {
          open: false,
          path: null,
        },
      };

    case OPEN_CHANGE_FILES:
      return {
        ...state,
        changeFiles: {
          open: true,
          files: action.payload,
        },
      };

    case GROUP_FILE_DELETE_SUCCESS:
      return {
        ...state,
        changeFiles: {
          ...state.changeFiles,
          files: {
            ...state.changeFiles.files,
            files: state.changeFiles.files.files.filter(
              (file) => file.id !== action.payload,
            ),
          },
        },
      };

    case CLOSE_CHANGE_FILES:
      return {
        ...state,
        changeFiles: {
          open: false,
          files: null,
        },
      };

    case OPEN_APPROVER_MATERIAL:
      return {
        ...state,
        approverMaterial: {
          open: true,
          files: action.payload,
        },
      };

    case CLOSE_APPROVER_MATERIAL:
      return {
        ...state,
        approverMaterial: {
          open: false,
          files: null,
        },
      };

    case OPEN_APPROVER_BUTTONS:
      return {
        ...state,
        approverButtons: {
          open: true,
          status: action.payload,
        },
      };

    case CLOSE_APPROVER_BUTTONS:
      return {
        ...state,
        approverButtons: {
          open: false,
          status: null,
        },
      };

    case OPEN_APPROVER_REJECT:
      return {
        ...state,
        approverReject: true,
      };

    case CLOSE_APPROVER_REJECT:
      return {
        ...state,
        approverReject: false,
      };

    case OPEN_WORKPLACE_MATERIAL:
      return {
        ...state,
        workplaceMaterial: {
          open: true,
          files: action.payload,
        },
      };

    case CLOSE_WORKPLACE_MATERIAL:
      return {
        ...state,
        workplaceMaterial: {
          open: false,
          files: null,
        },
      };

    case OPEN_WORKPLACE_MATERIAL_NEW:
      return {
        ...state,
        workplaceMaterialNew: {
          open: true,
          files: action.payload,
        },
      };

    case CLOSE_WORKPLACE_MATERIAL_NEW:
      return {
        ...state,
        workplaceMaterialNew: {
          open: false,
          files: null,
        },
      };

    case OPEN_WORKPLACE_MATERIAL_PROCESS:
      return {
        ...state,
        workplaceMaterialProcess: {
          open: true,
          files: action.payload,
        },
      };

    case CLOSE_WORKPLACE_MATERIAL_PROCESS:
      return {
        ...state,
        workplaceMaterialProcess: {
          open: false,
          files: null,
        },
      };

    case OPEN_WORKPLACE_BUTTONS:
      return {
        ...state,
        workplaceButtons: {
          open: true,
          status: action.payload,
        },
      };

    case CLOSE_WORKPLACE_BUTTONS:
      return {
        ...state,
        workplaceButtons: {
          open: false,
          status: null,
        },
      };

    case OPEN_WORKPLACE_REJECT:
      return {
        ...state,
        workplaceReject: true,
      };

    case CLOSE_WORKPLACE_REJECT:
      return {
        ...state,
        workplaceReject: false,
      };

    case OPEN_SHOW_FILES:
      return {
        ...state,
        showFiles: {
          open: true,
          files: action.payload,
        },
      };

    case CLOSE_SHOW_FILES:
      return {
        ...state,
        showFiles: {
          open: false,
          files: null,
        },
      };

    case GET_AMOUNT_UPLOAD_OPEN:
      return {
        ...state,
        amountUploadFiles: {
          open: true,
          type: action.payload,
        },
      };

    case GET_AMOUNT_UPLOAD_CLOSE:
      return {
        ...state,
        amountUploadFiles: {
          open: false,
          type: null,
        },
      };

    case OPEN_DIALOG_DELETE_MESSAGE:
      return {
        ...state,
        deleteMessage: {
          open: true,
          messageId: action.messageId,
          roomId: action.roomId,
        },
      };

    case CLOSE_DIALOG_DELETE_MESSAGE:
      return {
        ...state,
        deleteMessage: {
          open: false,
          messageId: null,
          roomId: null,
        },
      };

    case OPEN_DIALOG_DELETE_CHAT:
      return {
        ...state,
        deleteChat: {
          open: true,
          roomId: action.payload,
        },
      };

    case CLOSE_DIALOG_DELETE_CHAT:
      return {
        ...state,
        deleteChat: {
          open: false,
          roomId: null,
        },
      };

    case OPEN_DIALOG_DELETE_BOOKMARK:
      return {
        ...state,
        bookmarkDialog: {
          open: true,
          id: action.payload,
        },
      };

    case CLOSE_DIALOG_DELETE_BOOKMARK:
      return {
        ...state,
        bookmarkDialog: {
          open: false,
          id: null,
        },
      };

    case OPEN_MATERIAL_DELETE_BOOKMARK:
      return {
        ...state,
        bookmarkMaterial: true,
      };

    case CLOSE_MATERIAL_DELETE_BOOKMARK:
      return {
        ...state,
        bookmarkMaterial: false,
      };

    case OPEN_MATERIAL_POST_BOOKMARK:
      return {
        ...state,
        postHistorianMaterial: true,
      };

    case CLOSE_MATERIAL_POST_BOOKMARK:
      return {
        ...state,
        postHistorianMaterial: false,
      };

    case OPEN_DIALOG_DELETE_USER_SEND:
      return {
        ...state,
        userSendDelete: {
          open: true,
          files: action.payload,
        },
      };

    case CLOSE_DIALOG_DELETE_USER_SEND:
      return {
        ...state,
        userSendDelete: {
          open: false,
          files: null,
        },
      };

    default:
      return state;
  }
}

export const getChatMaterials = () => {
  return {
    type: OPEN_DIALOG_CHAT_MATERIALS,
  };
};

export const closeChatMaterials = () => {
  return {
    type: CLOSE_DIALOG_CHAT_MATERIALS,
  };
};

export const openHistorianChat = () => {
  return {
    type: OPEN_CHAT_HISTORIAN,
  };
};

export const closeHistorianChat = () => {
  return {
    type: CLOSE_CHAT_HISTORIAN,
  };
};

export const getOneImage = (path) => {
  return {
    type: SHOW_IMAGE_OPEN,
    payload: path,
  };
};

export const closeShowImage = () => {
  return {
    type: SHOW_IMAGE_CLOSE,
  };
};

export const openDialogDeleteMessage = (id, messageId) => {
  return {
    type: OPEN_DIALOG_DELETE_MESSAGE,
    roomId: id,
    messageId,
  };
};

export const closeDialogDeleteMessage = () => {
  return {
    type: CLOSE_DIALOG_DELETE_MESSAGE,
  };
};

export const openDialogDeleteChat = (id) => {
  return {
    type: OPEN_DIALOG_DELETE_CHAT,
    payload: id,
  };
};

export const closeDialogDeleteChat = () => {
  return {
    type: CLOSE_DIALOG_DELETE_CHAT,
  };
};

export const openDialogDeleteBookmark = (id) => {
  return {
    type: OPEN_DIALOG_DELETE_BOOKMARK,
    payload: id,
  };
};

export const closeDialogDeleteBookmark = () => {
  return {
    type: CLOSE_DIALOG_DELETE_BOOKMARK,
  };
};

export const openDialogDeleteUserSend = (files) => {
  return {
    type: OPEN_DIALOG_DELETE_USER_SEND,
    payload: files,
  };
};

export const closeMaterialDeleteBookmark = () => {
  return {
    type: CLOSE_MATERIAL_DELETE_BOOKMARK,
  };
};

export const openMaterialDeleteBookmark = () => {
  return {
    type: OPEN_MATERIAL_DELETE_BOOKMARK,
  };
};

export const closeMateriaPosteBookmark = () => {
  return {
    type: CLOSE_MATERIAL_POST_BOOKMARK,
  };
};

export const openMaterialPostBookmark = () => {
  return {
    type: OPEN_MATERIAL_POST_BOOKMARK,
  };
};

export const closeDialogDeleteUserSend = () => {
  return {
    type: CLOSE_DIALOG_DELETE_USER_SEND,
  };
};

export const openEditUserPass = () => {
  return {
    type: EDIT_PASS_OPEN,
  };
};

export const closeEditUserPass = () => {
  return {
    type: EDIT_PASS_CLOSE,
  };
};

export const openEditUser = () => {
  return {
    type: EDIT_USER_OPEN,
  };
};

export const closeEditUser = () => {
  return {
    type: EDIT_USER_CLOSE,
  };
};

export const openAmountUploadFiles = (mimeType) => {
  return {
    type: GET_AMOUNT_UPLOAD_OPEN,
    payload: mimeType,
  };
};

export const closeAmountUploadFiles = () => {
  return {
    type: GET_AMOUNT_UPLOAD_CLOSE,
  };
};

export const openTagsUploadFiles = (mimeType) => {
  return {
    type: GET_TAGS_UPLOAD_OPEN,
    payload: mimeType,
  };
};

export const closeTagsUploadFiles = () => {
  return {
    type: GET_TAGS_UPLOAD_CLOSE,
  };
};

export const openDeleteFileAffiliationDialog = (file) => {
  return {
    type: DELETE_GROUP_FILE_OPEN,
    payload: file,
  };
};

export const closeDeleteFileAffiliationDialog = () => {
  return {
    type: DELETE_GROUP_FILE_CLOSE,
  };
};

export const openChangeAffiliationFiles = (files) => {
  return {
    type: OPEN_CHANGE_FILES,
    payload: files,
  };
};

export const closeChangeAffiliationFiles = () => {
  return {
    type: CLOSE_CHANGE_FILES,
  };
};

export const openApproverAffiliation = (files) => {
  return {
    type: OPEN_APPROVER_MATERIAL,
    payload: files,
  };
};

export const closeApproverAffiliation = () => {
  return {
    type: CLOSE_APPROVER_MATERIAL,
  };
};

export const openApproverButtons = (status) => {
  return {
    type: OPEN_APPROVER_BUTTONS,
    payload: status,
  };
};

export const closeApproverButtons = () => {
  return {
    type: CLOSE_APPROVER_BUTTONS,
  };
};

export const openApproverReject = () => {
  return {
    type: OPEN_APPROVER_REJECT,
  };
};

export const closeApproverReject = () => {
  return {
    type: CLOSE_APPROVER_REJECT,
  };
};

export const openWorkplaceAffiliation = (files) => {
  return {
    type: OPEN_WORKPLACE_MATERIAL,
    payload: files,
  };
};

export const closeWorkplaceAffiliation = () => {
  return {
    type: CLOSE_WORKPLACE_MATERIAL,
  };
};

export const openWorkplaceAffiliationNew = (files) => {
  return {
    type: OPEN_WORKPLACE_MATERIAL_NEW,
    payload: files,
  };
};

export const closeWorkplaceAffiliationNew = () => {
  return {
    type: CLOSE_WORKPLACE_MATERIAL_NEW,
  };
};

export const openWorkplaceAffiliationProcess = (files) => {
  return {
    type: OPEN_WORKPLACE_MATERIAL_PROCESS,
    payload: files,
  };
};

export const closeWorkplaceAffiliationProcess = () => {
  return {
    type: CLOSE_WORKPLACE_MATERIAL_PROCESS,
  };
};

export const openWorkplaceButtons = (status) => {
  return {
    type: OPEN_WORKPLACE_BUTTONS,
    payload: status,
  };
};

export const closeWorkplaceButtons = () => {
  return {
    type: CLOSE_WORKPLACE_BUTTONS,
  };
};

export const openWorkplaceReject = () => {
  return {
    type: OPEN_WORKPLACE_REJECT,
  };
};

export const closeWorkplaceReject = () => {
  return {
    type: CLOSE_WORKPLACE_REJECT,
  };
};

export const openShowAffiliationFiles = (files) => {
  return {
    type: OPEN_SHOW_FILES,
    payload: files,
  };
};

export const closeShowAffiliationFiles = () => {
  return {
    type: CLOSE_SHOW_FILES,
  };
};

export const deleteFileUpload = (file) => {
  return (dispatch) => {
    dispatch({
      type: GROUP_FILE_DELETE_START,
      payload: file,
    });

    api
      .delete(`/user/draft/file/${file.id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GROUP_FILE_DELETE_SUCCESS,
          payload: file.id,
          data,
        });
        dispatch({
          type: USERSEND_GROUP_FILE_DELETE,
          payload: file,
          data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
