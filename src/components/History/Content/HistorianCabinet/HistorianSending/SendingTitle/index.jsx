import { useSelector, useDispatch } from 'react-redux';
import { changedIsMaterialHistorian } from '../../../../../../redux/actions/historianSendMaterial';
import style from './style.module.css';

function SendingTitle() {
  const dispatch = useDispatch();

  const material = useSelector(
    (state) => state.historianSendMaterial.materials,
  );

  const handleChange = () => {
    dispatch(changedIsMaterialHistorian());
  };

  return (
    <div className={style.title}>
      <div className={style.title__name}>Форма отправки информации</div>
      <div className={style.title__info}>
        <p>Сохранить как целостный материал</p>
        <input
          checked={material.is_material || ''}
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
