import { useSelector } from 'react-redux';
import HeaderButtons from './HeaderButtons';
import Chat from '../Chat';
import PauseBtn from './PauseBtn';
import SendBtn from './SendBtn';
import DeleteBtn from './DeleteBtn';
import RejectBtn from './RejectBtn';
import ChatBtn from './ChatBtn';

import style from './style.module.css';

function MaterialButtons() {
  const material = useSelector((state) => state.incomingMaterials.material);
  const chatOpen = useSelector((state) => state.application.chat);

  return (
    <div className={!material.isMaterial ? style.message : style.messageTop}>
      {!material.isMaterial ? null : <HeaderButtons />}
      <PauseBtn />
      <SendBtn />
      <DeleteBtn />
      <RejectBtn />
      <ChatBtn />
      {chatOpen ? <Chat /> : null}
    </div>
  );
}

export default MaterialButtons;
