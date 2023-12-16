import { useSelector } from 'react-redux';
import { useState } from 'react';
import DialogPreload from '../DialogPreload';
import FilesContainer from './FilesContainer';
import FileContainer from './FileContainer';

function AffiliationContainer() {
  const loading = useSelector((state) => state.uploadFiles.loading);

  const [showGroupFiles, setShowGroupFiles] = useState(false);

  const openShowGroupFiles = () => {
    setShowGroupFiles(true);
  };

  const closeShowGroupFiles = () => {
    setShowGroupFiles(false);
  };

  if (loading) {
    return <DialogPreload />;
  }

  return showGroupFiles ? (
    <FilesContainer closeShowGroupFiles={closeShowGroupFiles} />
  ) : (
    <FileContainer openShowGroupFiles={openShowGroupFiles} />
  );
}

export default AffiliationContainer;
