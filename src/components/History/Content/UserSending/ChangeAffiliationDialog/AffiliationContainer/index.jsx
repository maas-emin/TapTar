import { useEffect, useState } from 'react';
import FilesContainer from './FilesContainer';
import FileContainer from './FileContainer';
import { AffiliationContext } from '../context';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCauses,
  getCheckCauses,
} from '../../../../../../redux/ducks/tags';
import { closeChangeAffiliationFiles } from '../../../../../../redux/ducks/application';

function AffiliationContainer() {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const files = useSelector((state) => state.application.changeFiles.files);
  const check = useSelector((state) => state.tags.check);
  const checkType = check.some((item) => item.id === 1);
  const checkTime = check.some((item) => item.id === 2);

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
  const [informationClient, setInformationClient] = useState(
    files.tags_information,
  );
  const [centuryClient, setCenturyClient] = useState(files.tags_century);
  const [showGroupFiles, setShowGroupFiles] = useState(false);
  const [nameError, setNameError] = useState('');
  const [yearError, setYearError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [commentError, setCommentError] = useState('');

  const openShowGroupFiles = () => {
    setShowGroupFiles(true);
  };

  const closeShowGroupFiles = () => {
    setShowGroupFiles(false);
  };

  const handleCloseAffiliation = () => {
    body.style.overflow = 'visible';
    dispatch(clearCauses());
    dispatch(closeChangeAffiliationFiles());
  };

  useEffect(() => {
    if (files.group_uid) {
      dispatch(getCheckCauses(files.group_uid));
    }
  }, [dispatch, files.group_uid]);

  return (
    <AffiliationContext.Provider
      value={{
        showGroupFiles,
        openShowGroupFiles,
        closeShowGroupFiles,
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
        informationClient,
        setInformationClient,
        centuryClient,
        setCenturyClient,
        checkType,
        checkTime,
        handleCloseAffiliation,
      }}
    >
      {showGroupFiles ? <FilesContainer /> : <FileContainer />}
    </AffiliationContext.Provider>
  );
}

export default AffiliationContainer;
