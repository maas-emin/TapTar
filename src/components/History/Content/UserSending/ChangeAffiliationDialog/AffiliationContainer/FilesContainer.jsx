import { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AffiliationFilesGroup from '../AffiliationFiles';
import DialogDeleteFail from '../DialogDeleteFail';
import {
  closeDeleteFileAffiliationDialog,
  openDeleteFileAffiliationDialog,
} from '../../../../../../redux/ducks/application';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function FilesContainer() {
  const { closeShowGroupFiles } = useContext(AffiliationContext);

  const flexContainer = useRef(null);

  const dispatch = useDispatch();

  const files = useSelector((state) => state.application.changeFiles.files);

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
