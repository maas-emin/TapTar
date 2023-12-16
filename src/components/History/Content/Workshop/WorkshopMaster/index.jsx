import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import {
  addedFileInProcessing,
  showNewFile,
  showProcessingFile,
  deleteFileInProcessing,
  sendFileInProcessed,
  addFileInProcessed,
  showProcessedFile,
  sendTextInProcessed,
} from '../../../../../redux/ducks/workshop';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import Master from './Master/index';
import MasterShow from './MasterShow';

import style from './style.module.css';

function WorkshopMaster() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const show = useSelector((state) => state.workshop.show);
  const loading = useSelector((state) => state.workshop.loading);
  const file = useSelector((state) => state.workshop.file);

  const [text, setText] = useState('');

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  function fileUploadHandler(event) {
    const files = event.target.files[0];

    return dispatch(addFileInProcessed(files, location.type));
  }

  useEffect(() => {
    if (id !== undefined) {
      if (location.process_status === 'wait') {
        return dispatch(showNewFile(id));
      }
      if (location.process_status === 'processing') {
        return dispatch(showProcessingFile(id));
      }
      if (location.process_status === 'processed') {
        return dispatch(showProcessedFile(id));
      }
    }
  }, [dispatch, id, location.process_status]);

  const handleAddClick = () => {
    if (show?.file?.process_status === 'wait') {
      return dispatch(addedFileInProcessing(show.process_id));
    }
    if (show?.file?.process_status === 'processing') {
      if (location.type === 'text' && text.length > 5) {
        history.push('/history/workshop/processed');
        return dispatch(sendTextInProcessed(show.process_id, text));
      }
      history.push('/history/workshop/processed');
      return dispatch(sendFileInProcessed(show.process_id, file.id));
    }
  };

  const handleDeleteClick = () => {
    return dispatch(deleteFileInProcessing(show.process_id));
  };

  if (loading) {
    return (
      <div className={style.containerSkeleton}>
        <SkeletonMedia />
      </div>
    );
  }

  return (
    <>
      {location.process_status === 'processed' ? (
        <MasterShow />
      ) : (
        <Master
          handleChangeText={handleChangeText}
          text={text}
          fileUploadHandler={fileUploadHandler}
          handleAddClick={handleAddClick}
          handleDeleteClick={handleDeleteClick}
          show={show}
        />
      )}
    </>
  );
}

export default WorkshopMaster;
