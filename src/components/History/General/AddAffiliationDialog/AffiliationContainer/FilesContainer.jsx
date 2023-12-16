import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AffiliationFilesGroup from '../AffiliationFiles';
import CloseButton from '../../buttons/CloseButton/CloseButton';
import DialogDeleteFail from '../DialogDeleteFail';
import {
  closeDeleteFileAffiliationDialog,
  openDeleteFileAffiliationDialog,
} from '../../../../../redux/ducks/application';

import style from './style.module.css';

function FilesContainer({ closeShowGroupFiles }) {
  const flexContainer = useRef(null);

  const dispatch = useDispatch();

  const files = useSelector((state) => state.uploadFiles.files);

  const handleRemoveOpen = (file) => {
    flexContainer.current.style.overflowY = 'clip';
    dispatch(openDeleteFileAffiliationDialog(file, null));
  };

  const handleRemoveClose = () => {
    flexContainer.current.style.overflowY = 'auto';
    dispatch(closeDeleteFileAffiliationDialog());
  };

  return (
    <div className={style.form__dialog} ref={flexContainer}>
      <CloseButton
        bgColor="initial"
        handleClick={closeShowGroupFiles}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <AffiliationFilesGroup handleRemoveOpen={handleRemoveOpen} />
      <DialogDeleteFail handleRemoveClose={handleRemoveClose} files={files} />
    </div>
  );
}

export default FilesContainer;
