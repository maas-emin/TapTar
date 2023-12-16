import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeGroupFiles,
  changeOneFile,
  changeTextFile,
} from '../../../../../../redux/actions/userSendMaterial';
import { clearCauses } from '../../../../../../redux/ducks/tags';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function ChangeFileButtons() {
  const {
    nameError,
    setNameError,
    yearError,
    setYearError,
    authorError,
    setAuthorError,
    commentError,
    setCommentError,
    title,
    year,
    author,
    location,
    comment,
    informationClient,
    centuryClient,
    handleCloseAffiliation,
  } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  const files = useSelector((state) => state.application.changeFiles.files);
  const userText = useSelector(
    (state) => state.userSendMaterial.materials.text,
  );

  const handleFilesAddClick = () => {
    if (!title) {
      setNameError('Название не может быть пустым');
      return;
    }
    if (title.length < 4) {
      setNameError('В название не может быть меньше 4 символов');
      return;
    }
    if (year.length !== 0 && /\D/.test(year)) {
      setYearError('Год только числа');
      return;
    }
    if (year.length !== 0 && +year > currentYear) {
      setYearError('Год не может быть больше текущего');
      return;
    }
    if (author.length !== 0 && author.length < 4) {
      setAuthorError('Автор не может быть меньше 4 символов');
      return;
    }
    if (comment.length !== 0 && comment.length > 200) {
      setCommentError('В комментарии не может быть больше 200 символов');
      return;
    }
    if (author.length !== 0 && /\d/.test(author)) {
      setAuthorError('В авторе не может быть чисел');
      return;
    }
    if (files.type === 'text') {
      handleCloseAffiliation();
      dispatch(
        changeTextFile(
          userText,
          title,
          year,
          author,
          location,
          comment,
          centuryClient,
          informationClient,
        ),
      );
      return;
    }
    if (!files.group_uid) {
      handleCloseAffiliation();
      dispatch(
        changeOneFile(
          files.id,
          files.type,
          title,
          year,
          author,
          location,
          comment,
          centuryClient,
          informationClient,
        ),
      );
      return;
    }
    handleCloseAffiliation();
    dispatch(clearCauses());
    dispatch(
      changeGroupFiles(
        files.type,
        files.group_uid,
        title,
        year,
        author,
        location,
        comment,
        centuryClient,
        informationClient,
      ),
    );
  };

  return (
    <>
      <div className={style.buttons}>
        <button
          onClick={handleFilesAddClick}
          className={`${style.dialog__button} ${
            nameError || yearError || authorError || commentError
              ? style.btn__error
              : ''
          }`}
        >
          Отправить
        </button>
        <button
          onClick={handleCloseAffiliation}
          className={style.dialog__button}
        >
          Отменить
        </button>
      </div>
      {nameError || yearError || authorError || commentError ? (
        <div className={style.error}>
          {nameError || yearError || authorError || commentError}
        </div>
      ) : null}
    </>
  );
}

export default ChangeFileButtons;
