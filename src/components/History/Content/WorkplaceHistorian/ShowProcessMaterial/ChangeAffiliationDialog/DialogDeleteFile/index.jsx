import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMaterialFile } from '../../../../../../../redux/ducks/incomingMaterials';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import DeleteTagsItem from './DeleteTagsItem';

import style from './style.module.css';

function DialogDeleteFile({ setDeleteTag, handleCloseAffiliation }) {
  const dispatch = useDispatch();
  const deleteTag = useSelector((state) => state.tags.deleteTag);
  const process_id = useSelector(
    (state) => state.incomingMaterials.material.process_id,
  );

  const files = useSelector(
    (state) => state.application.workplaceMaterialProcess.files,
  );

  const [deleteState, setDeleteState] = useState([]);

  const handleSelectedTags = (caus) => {
    const newTag = [...deleteState, caus];

    setDeleteState(newTag);
  };

  const handleDeleteTags = (id) => {
    const filterTag = deleteState.filter((item) => item.id !== id);

    setDeleteState(filterTag);
  };

  const handleClickDelete = () => {
    if (!deleteState.length) return;
    dispatch(deleteMaterialFile(files.id, deleteState, files.type, process_id));
    setDeleteTag(false);
    handleCloseAffiliation();
  };

  return (
    <div className={style.tags}>
      <CloseButton
        bgColor="#BED1E6"
        handleClick={() => setDeleteTag(false)}
        width="25px"
        height="25px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <div className={style.tags__title}>Удалить файл</div>
      {deleteTag.map((caus) => {
        const check = deleteState.some((item) => item.id === caus.id);
        return (
          <DeleteTagsItem
            key={caus.id}
            check={check}
            handleSelectedTags={handleSelectedTags}
            handleDeleteTags={handleDeleteTags}
            caus={caus}
          />
        );
      })}
      <button
        onClick={handleClickDelete}
        className={`${style.tags__button} ${
          deleteState.length === 0 ? style['tags__button--disabled'] : ''
        }`}
      >
        Применить
      </button>
    </div>
  );
}

export default DialogDeleteFile;
