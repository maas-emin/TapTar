import { useDispatch, useSelector } from 'react-redux';
import AffiliationFile from '../AffiliationFile';
import { useState } from 'react';
import AffiliationButtons from '../AffiliationButtons/index';
import AffiliationForms from '../AffiliationInputs';
import AffiliationCredibility from '../AffiliationCredibility';
import AffiliationInformation from '../AffiliationInformation';
import TagsModal from '../TagsModal';
import AffiliationCenturies from '../AffiliationCenturies';
import AlbumModal from '../AlbumModal';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import { AffiliationContext } from './context';
import { closeChangeAffiliationFiles } from '../../../../../../../redux/ducks/application';
import DialogDeleteFile from '../DialogDeleteFile';

import style from './style.module.css';

function AffiliationContainer() {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const files = useSelector((state) => state.application.changeFiles.files);

  const [title, setTitle] = useState(files.title === null ? '' : files.title);
  const [year, setYear] = useState(files.year === null ? '' : files.year);
  const [author, setAuthor] = useState(
    files.author === null ? '' : files.author,
  );
  const [location, setLocation] = useState(
    files.location === null ? '' : files.location,
  );
  const [comment, setComment] = useState(
    files.comment === null ? '' : files.comment,
  );
  const [information, setInformation] = useState(files.tags_information);
  const [century, setCentury] = useState(files.tags_century);
  const [credibility, setCredibility] = useState(files.tags_credibility);
  const [bookmark, setBookmark] = useState(files.bookmark);
  const [albums, setAlbums] = useState(files.albums);
  const [effects, setEffects] = useState(files.effects);

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
  const [deleteTag, setDeleteTag] = useState(false);

  const handleCloseAffiliation = () => {
    body.style.overflow = 'visible';
    dispatch(closeChangeAffiliationFiles());
  };

  if (tagsModal.open) {
    return (
      <AffiliationContext.Provider
        value={{
          tagsModal,
          setTagsModal,
          information,
          setInformation,
          century,
          setCentury,
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
        value={{ setAlbumsModal, albums, setAlbums, handleCloseAffiliation }}
      >
        <AlbumModal />
      </AffiliationContext.Provider>
    );
  }

  if (deleteTag) {
    return (
      <DialogDeleteFile
        handleCloseAffiliation={handleCloseAffiliation}
        setDeleteTag={setDeleteTag}
      />
    );
  }

  return (
    <AffiliationContext.Provider
      value={{
        setDeleteTag,
        nameError,
        setNameError,
        yearError,
        setYearError,
        authorError,
        setAuthorError,
        commentError,
        setCommentError,
        title,
        setTitle,
        year,
        setYear,
        author,
        setAuthor,
        location,
        setLocation,
        comment,
        setComment,
        information,
        setInformation,
        century,
        setCentury,
        handleCloseAffiliation,
        credibilityError,
        setCredibilityError,
        albumsModal,
        setAlbumsModal,
        tagsModal,
        setTagsModal,
        credibility,
        setCredibility,
        bookmark,
        setBookmark,
        albums,
        setAlbums,
        effects,
        setEffects,
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
