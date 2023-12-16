import { useDispatch, useSelector } from 'react-redux';
import AffiliationFile from '../AffiliationFile';
import AffiliationForms from '../AffiliationFormsInfo';
import AffiliationComment from '../AffiliationComment';
import { useState } from 'react';
import AffiliationTagsUser from '../AffiliationTagsUser';
import CloseButton from '../../buttons/CloseButton/CloseButton';
import AffiliationButtons from '../AffiliationButtons';
import TagsCenturies from '../AffiliationTagsServer/TagsCenturies';
import TagsInformation from '../AffiliationTagsServer/TagsInformation';
import { cleanStateTags } from '../../../../../redux/ducks/userTags';
import { cleanUploadFiles } from '../../../../../redux/ducks/uploadFiles';
import {
  removeFile,
  removeFiles,
} from '../../../../../redux/actions/userSendMaterial';
import { clearCauses } from '../../../../../redux/ducks/tags';

import style from './style.module.css';

function FileContainer({ openShowGroupFiles }) {
  const dispatch = useDispatch();

  const files = useSelector((state) => state.uploadFiles.files);

  const body = document.querySelector('body');

  const [nameError, setNameError] = useState('');
  const [yearError, setYearError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleCloseAffiliation = () => {
    body.style.overflow = 'visible';
    if ((files.type = 'text')) {
      dispatch(cleanStateTags());
      dispatch(cleanUploadFiles());
      return;
    }
    if (files.group) {
      dispatch(clearCauses());
      dispatch(cleanStateTags());
      dispatch(cleanUploadFiles());
      dispatch(removeFiles(files));
      return;
    }
    dispatch(cleanStateTags());
    dispatch(cleanUploadFiles());
    dispatch(removeFile(files));
  };

  return (
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
      <AffiliationForms
        setNameError={setNameError}
        setYearError={setYearError}
        setAuthorError={setAuthorError}
      />
      <div
        className={`${style.dialog__info} ${
          files.type === 'document' || files.group
            ? style.form__dialogGroup
            : ''
        } ${files.type === 'audio' ? style.form__dialogAudio : ''}`}
      >
        <AffiliationFile openShowGroupFiles={openShowGroupFiles} />
        <div
          className={`${style.infoFileBlock} ${
            files.type === 'document' || files.group ? style.infoFileGroup : ''
          } ${files.type === 'audio' ? style.infoFileAudio : ''}`}
        >
          <AffiliationComment
            styleGroup={files.type === 'document' || files.group}
            styleAudio={files.type === 'audio'}
            setCommentError={setCommentError}
          />
          {files.type === 'document' ||
          files.type === 'audio' ||
          files.group ? null : (
            <AffiliationTagsUser />
          )}
        </div>
      </div>
      {files.type === 'document' || files.type === 'audio' || files.group ? (
        <AffiliationTagsUser />
      ) : null}
      <TagsCenturies />
      <TagsInformation />

      <AffiliationButtons
        nameError={nameError}
        yearError={yearError}
        authorError={authorError}
        commentError={commentError}
        setNameError={setNameError}
        setYearError={setYearError}
        setAuthorError={setAuthorError}
        setCommentError={setCommentError}
        handleClose={handleCloseAffiliation}
      />
    </div>
  );
}

export default FileContainer;
