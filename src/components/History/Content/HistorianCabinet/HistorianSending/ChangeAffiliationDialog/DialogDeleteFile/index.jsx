import { useDispatch, useSelector } from 'react-redux';
import { removeFileHistorian } from '../../../../../../../redux/actions/historianSendMaterial';

import style from './style.module.css';

function DialogDeleteFile({ setDeleteTag, handleCloseAffiliation }) {
  const dispatch = useDispatch();

  const files = useSelector((state) => state.application.changeFiles.files);

  const handleDeleteFail = () => {
    dispatch(removeFileHistorian(files));
    setDeleteTag(false);
    handleCloseAffiliation();
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Вы уверены</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteFail} className={style.button}>
          Да
        </div>
        <div onClick={() => setDeleteTag(false)} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteFile;
