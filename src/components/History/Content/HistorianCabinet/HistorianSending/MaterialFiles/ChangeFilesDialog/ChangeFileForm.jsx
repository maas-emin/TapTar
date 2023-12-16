import { useDispatch } from 'react-redux';
import AffiliationFile from './AffiliationFile';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import { useState } from 'react';
import AffiliationButtons from './AffiliationButtons';
import ChangeCredibility from './ChangeCredibility';
import ChangeInformation from './ChangeInformation';
import ChangeCenturies from './ChangeCenturies';
import AffiliationForms from './AffiliationForms';
import {
  changeHistorianFile,
  setTextHistorian,
} from '../../../../../../../redux/actions/historianSendMaterial';
import AlbumModal from './AlbumModal';
import DialogDeleteFail from './DialogDeleteFail';
import TagsModal from './TagsModal';

import style from './style.module.css';

function ChangeFileForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState(props.change.file.title);
  const [year, setYear] = useState(
    props.change.file.year === null ? '' : props.change.file.year,
  );
  const [author, setAuthor] = useState(
    props.change.file.author === null ? '' : props.change.file.author,
  );
  const [location, setLocation] = useState(
    props.change.file.location === null ? '' : props.change.file.location,
  );
  const [comment, setComment] = useState(
    props.change.file.comment === null ? '' : props.change.file.comment,
  );

  const [nameError, setNameError] = useState('');
  const [yearError, setYearError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [credibilityError, setCredibilityError] = useState('');
  const [commentError, setCommentError] = useState('');

  const [bookmark, setBookmark] = useState(props.change.file.bookmark);
  const [albums, setAlbums] = useState(props.change.file.albums);

  //теги
  const [information, setInformation] = useState(
    props.change.file.tags_information,
  );
  const [century, setCentury] = useState(props.change.file.tags_century);
  const [credibility, setCredibility] = useState(
    props.change.file.tags_credibility,
  );

  //Группа файлов

  const [material, setMaterial] = useState(props.change.file);

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  //Модалки
  const [tagsModal, setTagsModal] = useState({
    open: false,
    title: '',
  });

  const [albumsModal, setAlbumsModal] = useState(false);

  const [deleteTag, setDeleteTag] = useState(false);

  const handleFailAddClick = () => {
    if (!name) {
      return setNameError(' Название не может быть пустым');
    }
    if (name.length < 4) {
      return setNameError('В название не может быть меньше 4 символов');
    }
    if (credibility.length === 0) {
      return setCredibilityError(
        'Необходимо добавить хотя бы один тег достоверности',
      );
    }
    if (year.length !== 0 && /\D/.test(year)) {
      return setYearError('Год только числа');
    }
    if (year.length !== 0 && +year > currentYear) {
      return setYearError('Год не может быть больше текущего');
    }
    if (author.length !== 0 && author.length < 4) {
      return setAuthorError('Автор не может быть меньше 4 символов');
    }
    if (comment.length !== 0 && comment.length > 200) {
      return setCommentError('В комментарии не может быть больше 200 символов');
    }
    if (author.length !== 0 && /\d/.test(author)) {
      return setAuthorError('В авторе не может быть чисел');
    }
    if (props.change.format === 'text') {
      props.handleChangeClose();
      return dispatch(
        setTextHistorian(
          props.change.file,
          props.change.format,
          name,
          year,
          author,
          location,
          comment,
          bookmark,
          albums,
          information,
          century,
          credibility,
          material,
        ),
      );
    }
    props.handleChangeClose();
    return dispatch(
      changeHistorianFile(
        props.change.file.id,
        props.change.format,
        name,
        year,
        author,
        location,
        comment,
        bookmark,
        albums,
        information,
        century,
        credibility,
        material,
      ),
    );
  };

  if (tagsModal.open) {
    return (
      <TagsModal
        century={century}
        information={information}
        setCentury={setCentury}
        setInformation={setInformation}
        tagsModal={tagsModal}
        setTagsModal={setTagsModal}
      />
    );
  }

  if (albumsModal) {
    return (
      <AlbumModal
        albums={albums}
        setAlbums={setAlbums}
        setAlbumsModal={setAlbumsModal}
      />
    );
  }

  if (deleteTag) {
    return (
      <DialogDeleteFail
        file={props.change.file}
        format={props.change.format}
        setDeleteTag={setDeleteTag}
        handleChangeClose={props.handleChangeClose}
      />
    );
  }

  return (
    <div className={style.form__dialog}>
      <CloseButton
        bgColor="initial"
        handleClick={props.handleChangeClose}
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
        setCommentError={setCommentError}
        setName={setName}
        setYear={setYear}
        setAuthor={setAuthor}
        name={name}
        year={year}
        author={author}
        comment={comment}
        location={location}
        setLocation={setLocation}
        setComment={setComment}
      />

      <AffiliationFile
        setLocalEffects={setMaterial}
        localEffects={material}
        format={props.change.format}
        content={material}
        file={props.change.file}
      />

      <ChangeCredibility
        credibility={credibility}
        setCredibility={setCredibility}
        setCredibilityError={setCredibilityError}
      />

      <ChangeCenturies
        century={century}
        setCentury={setCentury}
        setTagsModal={setTagsModal}
      />

      <ChangeInformation
        information={information}
        setInformation={setInformation}
        setTagsModal={setTagsModal}
      />

      <AffiliationButtons
        handleDeleteFileOpen={props.handleDeleteFileOpen}
        handleFailAddClick={handleFailAddClick}
        nameError={nameError}
        change={props.change}
        authorError={authorError}
        yearError={yearError}
        credibilityError={credibilityError}
        commentError={commentError}
        bookmark={bookmark}
        setBookmark={setBookmark}
        setAlbumsModal={setAlbumsModal}
        deleteTag={deleteTag}
        setDeleteTag={setDeleteTag}
      />
    </div>
  );
}

export default ChangeFileForm;
