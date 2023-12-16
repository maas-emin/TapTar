import { useSelector, useDispatch } from 'react-redux';
import { changedIsMaterial } from '../../../../../../redux/ducks/incomingMaterials';
import style from './style.module.css';

function SendingTitle() {
  const dispatch = useDispatch();

  const user_id = useSelector(
    (state) => state.incomingMaterials.material.user_id,
  );
  const material = useSelector((state) => state.incomingMaterials.material);

  const handleChange = () => {
    dispatch(changedIsMaterial());
  };

  return (
    <div className={style.title}>
      <div className={style.title__name}>Автор: id {user_id}</div>
      <div className={style.title__info}>
        <p>Сохранить как целостный материал</p>
        <input
          checked={material.isMaterial || ''}
          onChange={handleChange}
          className={style.input}
          type="checkbox"
          name="switchHistorian"
          id="switchHistorian"
        />
        <label className={style.label} htmlFor="switchHistorian"></label>
      </div>
    </div>
  );
}

export default SendingTitle;
