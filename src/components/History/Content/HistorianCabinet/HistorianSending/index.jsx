import MaterialText from './MaterialText';
import MaterialTitle from './MaterialTitle';
import SendingTitle from './SendingTitle';
import MessageSendBtn from './MessageSendBtn';
import MaterialButtonsContainer from './MaterialButtonsContainer';
import MaterialFiles from './MaterialFiles';
import { useSelector } from 'react-redux';
import AddAffiliationDialog from './AddAffiliationDialog';
import Dialog from '../../../General/Dialog';
import DialogSelectedTags from '../../../General/DialogSelectedTags';
import ChangeAffiliationDialog from './ChangeAffiliationDialog';
import DialogDeleteFile from './DialogDeleteFile';
import PostMaterialDialog from './PostMaterialDialog';
import { useEffect, useRef, useState } from 'react';

import style from './style.module.css';

function HistorianSending() {
  const uploadFiles = useSelector((state) => state.uploadFiles.open);
  const changeFiles = useSelector(
    (state) => state.application.changeFiles.open,
  );
  const userSendDelete = useSelector(
    (state) => state.application.userSendDelete.open,
  );
  const openPostMaterial = useSelector(
    (state) => state.application.postHistorianMaterial,
  );

  const [size, setSize] = useState({});

  const ref = useRef();

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div ref={ref} className={style.material}>
      <div className={style.material__send}>
        <div className="containerSend">
          <SendingTitle />
          <MaterialTitle />
          <MaterialText />
          <MaterialButtonsContainer />
          <MaterialFiles />
          {size.clientWidth > 1430 ? null : (
            <div className={style.material__buttons}>
              <MessageSendBtn />
            </div>
          )}
        </div>
      </div>
      {size.clientWidth > 1430 ? (
        <div className={style.material__buttons}>
          <MessageSendBtn />
        </div>
      ) : null}
      <Dialog open={uploadFiles}>
        <AddAffiliationDialog />
      </Dialog>
      <Dialog open={changeFiles}>
        <ChangeAffiliationDialog />
      </Dialog>
      <DialogSelectedTags open={userSendDelete}>
        <DialogDeleteFile />
      </DialogSelectedTags>
      <DialogSelectedTags open={openPostMaterial}>
        <PostMaterialDialog />
      </DialogSelectedTags>
    </div>
  );
}

export default HistorianSending;
