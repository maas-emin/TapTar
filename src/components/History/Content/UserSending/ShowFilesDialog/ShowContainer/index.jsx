import FilesContainer from './FilesContainer';
import FileContainer from './FileContainer';
import { useDispatch, useSelector } from 'react-redux';
import { closeShowAffiliationFiles } from '../../../../../../redux/ducks/application';

function ShowContainer() {
  const files = useSelector((state) => state.application.showFiles.files);

  const dispatch = useDispatch();

  const handleChangeClose = () => {
    dispatch(closeShowAffiliationFiles());
  };

  return files.group_uid ? (
    <FilesContainer handleChangeClose={handleChangeClose} />
  ) : (
    <FileContainer handleChangeClose={handleChangeClose} />
  );
}

export default ShowContainer;
