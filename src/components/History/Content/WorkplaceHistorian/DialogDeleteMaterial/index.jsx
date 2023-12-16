import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMaterial } from '../../../../../redux/ducks/incomingMaterials';
import CloseButton from '../../../General/buttons/CloseButton/CloseButton';
import { closeWorkplaceReject } from '../../../../../redux/ducks/application';
import DeleteTagsItem from './DeleteTagsItem';

import style from './style.module.css';

function DialogDeleteMaterial() {
  const body = document.querySelector('body');

  const history = useHistory();

  const dispatch = useDispatch();

  const deleteTag = useSelector((state) => state.tags.deleteTag);
  const process_id = useSelector(
    (state) => state.incomingMaterials.material.process_id,
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

  const handleClick = () => {
    if (!deleteState.length) return;
    dispatch(deleteMaterial(deleteState, process_id));
    history.push('/history/incoming-materials');
    handleDeleteClose();
  };

  const handleDeleteClose = () => {
    body.style.overflow = 'visible';
    dispatch(closeWorkplaceReject());
  };

  return (
    <div className={style.tags}>
      <CloseButton
        bgColor="#BED1E6"
        handleClick={handleDeleteClose}
        width="25px"
        height="25px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <div className={style.tags__title}>Удалить материал</div>
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
        onClick={handleClick}
        className={`${style.tags__button} ${
          deleteState.length === 0 ? style['tags__button--disabled'] : ''
        }`}
      >
        Применить
      </button>
    </div>
  );
}

export default DialogDeleteMaterial;
