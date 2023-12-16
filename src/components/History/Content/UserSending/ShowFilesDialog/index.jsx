import { useSelector } from 'react-redux';
import ShowContainer from './ShowContainer';

function ShowFilesDialog(props) {
  const showFiles = useSelector((state) => state.application.showFiles.open);

  if (!showFiles) return null;

  return <ShowContainer />;
}

export default ShowFilesDialog;
