import { useDispatch, useSelector } from 'react-redux';
import {
  uploadGroupFiles,
  uploadOneFile,
  uploadTextFile,
} from '../../../../../redux/actions/userSendMaterial';
import { clearCauses } from '../../../../../redux/ducks/tags';
import { cleanUploadFiles } from '../../../../../redux/ducks/uploadFiles';
import { cleanStateTags } from '../../../../../redux/ducks/userTags';

import style from './style.module.css';

function ChangeFileButtons(props) {
  const dispatch = useDispatch();

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  const files = useSelector((state) => state.uploadFiles.files);
  const title = useSelector((state) => state.userTags.title);
  const year = useSelector((state) => state.userTags.year);
  const location = useSelector((state) => state.userTags.location);
  const comment = useSelector((state) => state.userTags.comment);
  const centuriesClient = useSelector((state) => state.userTags.tags_century);
  const typesClient = useSelector((state) => state.userTags.tags_information);
  const author = useSelector((state) => state.userTags.author);
  const userText = useSelector(
    (state) => state.userSendMaterial.materials.text,
  );

  const handleFilesAddClick = () => {
    if (!title) {
      props.setNameError('Название не может быть пустым');
      return;
    }
    if (title.length < 4) {
      props.setNameError('В название не может быть меньше 4 символов');
      return;
    }
    if (year.length !== 0 && /\D/.test(year)) {
      props.setYearError('Год только числа');
      return;
    }
    if (year.length !== 0 && +year > currentYear) {
      props.setYearError('Год не может быть больше текущего');
      return;
    }
    if (author.length !== 0 && author.length < 4) {
      props.setAuthorError('Автор не может быть меньше 4 символов');
      return;
    }
    if (comment.length !== 0 && comment.length > 200) {
      props.setCommentError('В комментарии не может быть больше 200 символов');
      return;
    }
    if (author.length !== 0 && /\d/.test(author)) {
      props.setAuthorError('В авторе не может быть чисел');
      return;
    }
    if (files.type === 'text') {
      dispatch(cleanStateTags());
      dispatch(cleanUploadFiles());
      dispatch(
        uploadTextFile(
          title,
          year,
          author,
          location,
          comment,
          centuriesClient,
          typesClient,
          userText.text,
        ),
      );
      return;
    }
    if (!files.group) {
      dispatch(cleanStateTags());
      dispatch(cleanUploadFiles());
      dispatch(
        uploadOneFile(
          files,
          files.type,
          title,
          year,
          author,
          location,
          comment,
          centuriesClient,
          typesClient,
        ),
      );
      return;
    }
    dispatch(cleanStateTags());
    dispatch(cleanUploadFiles());
    dispatch(clearCauses());
    dispatch(
      uploadGroupFiles(
        files,
        files.type,
        title,
        year,
        author,
        location,
        comment,
        centuriesClient,
        typesClient,
      ),
    );
  };

  return (
    <>
      <div className={style.buttons}>
        <button
          onClick={handleFilesAddClick}
          className={`${style.dialog__button} ${
            props.nameError ||
            props.yearError ||
            props.authorError ||
            props.commentError
              ? style.btn__error
              : ''
          }`}
        >
          Отправить
        </button>
        <button onClick={props.handleClose} className={style.dialog__button}>
          Отменить
        </button>
      </div>
      {props.nameError ||
      props.yearError ||
      props.authorError ||
      props.commentError ? (
        <div className={style.error}>
          {props.nameError ||
            props.yearError ||
            props.authorError ||
            props.commentError}
        </div>
      ) : null}
    </>
  );
}

export default ChangeFileButtons;
