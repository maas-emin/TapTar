import DialogFile from '../DialogFile';
import DialogButton from '../DialogButton';
import FileInformation from '../FileInformation';
import TagsInformation from '../TagsInformation';
import TagsCenturies from '../TagsCenturies';
import TagsCredibility from '../TagsCredibility';
import FileComment from '../FileComment';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import { closeWorkplaceAffiliation } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function DialogContainer() {
  const dispatch = useDispatch();

  const file = useSelector(
    (state) => state.application.workplaceMaterial.files,
  );

  const name = file.title;
  const year = file.year === null ? '' : file.year;
  const author = file.author === null ? '' : file.author;
  const location = file.location === null ? '' : file.location;
  const comment = file.comment === null ? '' : file.comment;
  const information = file.tags_information;
  const century = file.tags_century;
  const credibility = file.tags_credibility;

  const handleClose = () => {
    dispatch(closeWorkplaceAffiliation());
  };

  return (
    <div className={style.form__dialog}>
      <CloseButton
        bgColor="initial"
        handleClick={handleClose}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <div className={style.fileBlock}>
        <DialogFile format={file.type} content={file} />

        <FileInformation
          file={file}
          name={name}
          year={year}
          author={author}
          location={location}
        />
      </div>

      <FileComment comment={comment} />

      <TagsCredibility credibility={credibility} />
      {!information.length && !century.length ? null : (
        <div className={style.tags__title}>Добавленные:</div>
      )}
      <TagsCenturies century={century} />
      <TagsInformation information={information} />

      <DialogButton />
    </div>
  );
}

export default DialogContainer;
