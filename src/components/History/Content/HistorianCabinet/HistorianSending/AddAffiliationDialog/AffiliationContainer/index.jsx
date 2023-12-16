import { useDispatch, useSelector } from 'react-redux';
import AffiliationFile from '../AffiliationFile';
import { removeFileHistorian } from '../../../../../../../redux/actions/historianSendMaterial';
import { useState } from 'react';
import DialogPreload from '../DialogPreload';
import AffiliationButtons from '../AffiliationButtons/index';
import AffiliationForms from '../AffiliationInputs';
import AffiliationCredibility from '../AffiliationCredibility';
import AffiliationInformation from '../AffiliationInformation';
import TagsModal from '../TagsModal';
import AffiliationCenturies from '../AffiliationCenturies';
import AlbumModal from '../AlbumModal';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import { AffiliationContext } from '../context';
import { cleanStateTags } from '../../../../../../../redux/ducks/userTags';
import { cleanUploadFiles } from '../../../../../../../redux/ducks/uploadFiles';

import style from './style.module.css';

function AffiliationContainer() {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const loadingFiles = useSelector((state) => state.uploadFiles.loading);

  const files = useSelector((state) => state.uploadFiles.files);

  const [nameError, setNameError] = useState('');
  const [yearError, setYearError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [commentError, setCommentError] = useState('');
  const [credibilityError, setCredibilityError] = useState('');

  const [tagsModal, setTagsModal] = useState({
    open: false,
    title: '',
  });

  const [albumsModal, setAlbumsModal] = useState(false);

  const handleCloseAffiliation = () => {
    body.style.overflow = 'visible';
    if (files.type === 'text') {
      dispatch(cleanStateTags());
      dispatch(cleanUploadFiles());
      return;
    }
    dispatch(cleanStateTags());
    dispatch(cleanUploadFiles());
    dispatch(removeFileHistorian(files));
  };

  if (loadingFiles) {
    return <DialogPreload />;
  }

  if (tagsModal.open) {
    return (
      <AffiliationContext.Provider
        value={{
          tagsModal,
          setTagsModal,
          handleCloseAffiliation,
        }}
      >
        <TagsModal />
      </AffiliationContext.Provider>
    );
  }

  if (albumsModal) {
    return (
      <AffiliationContext.Provider
        value={{ setAlbumsModal, handleCloseAffiliation }}
      >
        <AlbumModal />
      </AffiliationContext.Provider>
    );
  }

  return (
    <AffiliationContext.Provider
      value={{
        nameError,
        setNameError,
        yearError,
        setYearError,
        authorError,
        setAuthorError,
        commentError,
        setCommentError,
        credibilityError,
        setCredibilityError,
        albumsModal,
        setAlbumsModal,
        handleCloseAffiliation,
        tagsModal,
        setTagsModal,
      }}
    >
      <div className={style.form__dialog}>
        <CloseButton
          bgColor="initial"
          handleClick={handleCloseAffiliation}
          width="35px"
          height="35px"
          top="10px"
          right="13px"
          boxShadow="none"
        />
        <AffiliationForms />
        <AffiliationFile />
        <AffiliationCredibility />
        <AffiliationCenturies />
        <AffiliationInformation />
        <AffiliationButtons />
      </div>
    </AffiliationContext.Provider>
  );
}

export default AffiliationContainer;
