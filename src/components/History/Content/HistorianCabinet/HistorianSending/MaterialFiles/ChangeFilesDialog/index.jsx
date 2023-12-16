import { useState } from 'react';
import ChangeFileForm from './ChangeFileForm';

function ChangeFilesDialog(props) {
  const [deleteTag, setDeleteTag] = useState({
    open: false,
    file: [],
    format: '',
    amount: '',
    groupId: '',
  });

  const handleDeleteFileOpen = (file, format, amount, groupId) => {
    setDeleteTag({
      open: true,
      file: file,
      format,
      amount,
      groupId,
    });
  };

  const handleDeleteClose = () => {
    setDeleteTag({
      open: false,
      file: [],
      format: '',
      amount: '',
      groupId: '',
    });
  };

  if (!props.change.file) {
    return null;
  }

  return (
    <ChangeFileForm
      change={props.change}
      setChange={props.setChange}
      handleChangeClose={props.handleChangeClose}
      deleteTag={deleteTag}
      handleDeleteClose={handleDeleteClose}
      handleDeleteFileOpen={handleDeleteFileOpen}
    />
  );
}

export default ChangeFilesDialog;
