import { useSelector } from 'react-redux';
import AffiliationFile from '../AffiliationFile';
import AffiliationForms from '../AffiliationFormsInfo';
import AffiliationComment from '../AffiliationComment';
import { useContext } from 'react';
import AffiliationTagsUser from '../AffiliationTagsUser';
import AffiliationButtons from '../AffiliationButtons';
import TagsCenturies from '../AffiliationTagsServer/TagsCenturies';
import TagsInformation from '../AffiliationTagsServer/TagsInformation';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function FileContainer() {
  const { handleCloseAffiliation } = useContext(AffiliationContext);

  const files = useSelector((state) => state.application.changeFiles.files);

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
      <AffiliationForms />
      <div
        className={`${style.dialog__info} ${
          files.type === 'document' || files.group_uid
            ? style.form__dialogGroup
            : ''
        } ${files.type === 'audio' ? style.form__dialogAudio : ''}`}
      >
        <AffiliationFile />
        <div
          className={`${style.infoFileBlock} ${
            files.type === 'document' || files.group_uid
              ? style.infoFileGroup
              : ''
          } ${files.type === 'audio' ? style.infoFileAudio : ''}`}
        >
          <AffiliationComment
            styleGroup={files.type === 'document' || files.group_uid}
            styleAudio={files.type === 'audio'}
          />
          {files.type === 'document' ||
          files.type === 'audio' ||
          files.group_uid ? null : (
            <AffiliationTagsUser />
          )}
        </div>
      </div>
      {files.type === 'document' ||
      files.type === 'audio' ||
      files.group_uid ? (
        <AffiliationTagsUser />
      ) : null}
      <TagsCenturies />
      <TagsInformation />

      <AffiliationButtons />
    </div>
  );
}

export default FileContainer;
