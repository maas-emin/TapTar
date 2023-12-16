import { useDispatch, useSelector } from 'react-redux';
import { postMaterial } from '../../../../../redux/actions/userSendMaterial';

import style from './style.module.css';

function MessageSendBtn() {
  const dispatch = useDispatch();

  const materials = useSelector((state) => state.userSendMaterial.materials);
  const sendError = useSelector((state) => state.userSendMaterial.sendError);

  const photo =
    materials.photo.one.length || materials.photo.group.length
      ? materials.photo
      : [];
  const document =
    materials.document.one.length || materials.document.group.length
      ? materials.document
      : [];
  const video =
    materials.video.one.length || materials.video.group.length
      ? materials.video
      : [];
  const audio =
    materials.audio.one.length || materials.audio.group.length
      ? materials.audio
      : [];

  const handlePostMaterial = () => {
    dispatch(
      postMaterial(
        materials.title,
        materials.text,
        photo,
        document,
        video,
        audio,
      ),
    );
  };

  return (
    <div className={style.message}>
      <button onClick={handlePostMaterial} className={style.add__btn}>
        Отправить
      </button>
      {sendError ? (
        <div className={style.error}>
          Не удалось отправить материал, пожалуйста убедитесь в целостности
          данных
        </div>
      ) : null}
    </div>
  );
}

export default MessageSendBtn;
