import React from 'react';
import { useSelector } from 'react-redux';
import FileUploadProgress from './FileUploadProgress';
import MasterUploadFile from './MasterUploadFile';
import MasterUploadShow from './MasterUploadShow';

function ProcessedFile(props) {
  const file = useSelector((state) => state.workshop.file);
  const loadProgress = useSelector((state) => state.workshop.loadProgress);

  if (loadProgress) {
    return <FileUploadProgress />;
  }

  return (
    <React.Fragment>
      {file === null ? (
        <MasterUploadFile fileUploadHandler={props.fileUploadHandler} />
      ) : (
        <MasterUploadShow />
      )}
    </React.Fragment>
  );
}

export default ProcessedFile;
