import MaterialTitle from './MaterialTitle';
import MaterialText from './MaterialText';
import SendingTitle from './SendingTitle';
import MessageSendBtn from './MessageSendBtn';
import MaterialFiles from './MaterialFiles';
import MaterialButtonsContainer from './MaterialButtonsContainer';
import DialogButtons from '../../General/DialogButtons';
import ButtonsUploadFiles from './MaterialButtonsContainer/MaterialUploadButtons/ButtonsUploadFiles';
import { useSelector } from 'react-redux';
import SelectedTags from './MaterialButtonsContainer/MaterialUploadButtons/ButtonsUploadFiles/SelectedTags';
import DialogSelectedTags from '../../General/DialogSelectedTags';
import Dialog from '../../General/Dialog';
import AddAffiliationDialog from '../../General/AddAffiliationDialog';
import ChangeAffiliationDialog from './ChangeAffiliationDialog';
import DialogDeleteFileMaterial from './DialogDeleteFileMaterial';
import ShowFilesDialog from './ShowFilesDialog';
import SkeletonMedia from '../../General/Skeletons/SkeletonMedia';

import style from './style.module.css';

function UserSending() {
  const loading = useSelector((state) => state.userSendMaterial.loading);
  const amountUploadFiles = useSelector(
    (state) => state.application.amountUploadFiles.open,
  );
  const tagsUploadFiles = useSelector(
    (state) => state.application.tagsUploadFiles.open,
  );
  const uploadFiles = useSelector((state) => state.uploadFiles.open);
  const changeFiles = useSelector(
    (state) => state.application.changeFiles.open,
  );
  const showFiles = useSelector((state) => state.application.showFiles.open);
  const userSendDelete = useSelector(
    (state) => state.application.userSendDelete.open,
  );

  if (loading) {
    return (
      <div className={style.containerSkeleton}>
        <SkeletonMedia />
      </div>
    );
  }

  return (
    <div className={style.mainSend}>
      <div className={style.send}>
        <div className="containerSend">
          <SendingTitle />
          <MaterialTitle />
          <MaterialText />
          <MaterialButtonsContainer />
          <MaterialFiles />
          <MessageSendBtn />
        </div>
      </div>
      <DialogButtons open={amountUploadFiles}>
        <ButtonsUploadFiles />
      </DialogButtons>
      <DialogSelectedTags open={tagsUploadFiles}>
        <SelectedTags />
      </DialogSelectedTags>
      <Dialog open={uploadFiles}>
        <AddAffiliationDialog />
      </Dialog>
      <Dialog open={changeFiles}>
        <ChangeAffiliationDialog />
      </Dialog>
      <DialogSelectedTags open={userSendDelete}>
        <DialogDeleteFileMaterial />
      </DialogSelectedTags>
      <Dialog open={showFiles}>
        <ShowFilesDialog />
      </Dialog>
    </div>
  );
}

export default UserSending;
