import { useSelector } from 'react-redux';
import style from './style.module.css';

function MaterialAuthor() {
  const user_id = useSelector(
    (state) => state.incomingMaterials.material.user_id,
  );
  const rejectInfo = useSelector((state) => state.incomingMaterials.reject);

  return (
    <div className={style.title}>
      <div className={style.title__name}>Автор: id {user_id}</div>
      {rejectInfo ? (
        <div className={style.reject}>Причина отказа: {rejectInfo}</div>
      ) : null}
    </div>
  );
}

export default MaterialAuthor;
