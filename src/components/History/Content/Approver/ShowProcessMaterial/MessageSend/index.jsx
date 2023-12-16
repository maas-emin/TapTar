import ButtonProcessed from './ButtonProcessed';
import ButtonDelete from './ButtonDelete';
import ButtonRefuse from './ButtonRefuse';

import style from './style.module.css';

function MessageSendBtn() {
  return (
    <div className={style.message}>
      <ButtonProcessed />
      <ButtonDelete />
      <ButtonRefuse />
    </div>
  );
}

export default MessageSendBtn;
