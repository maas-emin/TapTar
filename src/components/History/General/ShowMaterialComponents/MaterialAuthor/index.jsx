import { useSelector } from 'react-redux';
import style from './style.module.css';

function MaterialAuthor() {
  const user_id = useSelector(
    (state) => state.cabinetMaterial.material.user_id,
  );

  return (
    <div className={style.title}>
      <div className={style.title__name}>Автор: id {user_id}</div>
    </div>
  );
}

export default MaterialAuthor;
