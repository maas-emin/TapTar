import { useState } from 'react';
import AffiliationFilesGroup from './AffiliationFilesGroup';
import CloseButton from '../../../General/buttons/CloseButton/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { closeChatMaterials } from '../../../../../redux/ducks/application';
import { addingMaterialFile } from '../../../../../redux/ducks/messages';
import { MaterialContext } from './context';

import style from './style.module.css';

function FilesDialogMain() {
  const roomId = useSelector((state) => state.messages.room?.id);

  const dispatch = useDispatch();

  const [materials, setMaterials] = useState([]);

  const addFileInMaterials = (id) => {
    setMaterials([...materials, id]);
  };

  const removeFileInMaterials = (id) => {
    setMaterials(materials.filter((material) => material !== id));
  };

  const closeFilesRoom = () => {
    dispatch(closeChatMaterials());
  };

  const handleSendClick = () => {
    if (materials.length === 0) return;

    materials.forEach((element) => {
      dispatch(addingMaterialFile(roomId, element));
    });
    closeFilesRoom();
  };

  return (
    <MaterialContext.Provider
      value={{
        addFileInMaterials,
        removeFileInMaterials,
        materials,
      }}
    >
      <div className={style.form__dialog}>
        <CloseButton
          bgColor="initial"
          handleClick={closeFilesRoom}
          width="35px"
          height="35px"
          top="10px"
          right="13px"
          boxShadow="none"
        />
        <AffiliationFilesGroup
          closeFilesRoom={closeFilesRoom}
          handleSendClick={handleSendClick}
        />
      </div>
    </MaterialContext.Provider>
  );
}

export default FilesDialogMain;
