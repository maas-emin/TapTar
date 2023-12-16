import { useSelector, useDispatch } from 'react-redux';
import { changedIncomingMaterialTitle } from '../../../../../../redux/ducks/incomingMaterials';

import style from './style.module.css';

function MaterialTitle() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.incomingMaterials.material.title);

  const handleChange = (e) => {
    dispatch(changedIncomingMaterialTitle(e.target.value));
  };

  return (
    <div className={style.form__name}>
      <div className={style.form__title}>Название материала</div>
      <input
        onChange={handleChange}
        value={title}
        className={style['form__input-name']}
        type="text"
        name="titleHisorian"
        placeholder="Введите название..."
      />
    </div>
  );
}

export default MaterialTitle;
