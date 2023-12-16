import { useSelector, useDispatch } from 'react-redux';
import { changeTitle } from '../../../../../../redux/actions/historianSendMaterial';

import style from './style.module.css';

function MaterialTitle() {
  const dispatch = useDispatch();

  const title = useSelector(
    (state) => state.historianSendMaterial.materials.title,
  );

  const handleChange = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  return (
    <div className={style.form__name}>
      <div className={style.form__title}>Название материала</div>
      <input
        onChange={handleChange}
        value={title}
        className={style['form__input-name']}
        type="text"
        name="name"
        placeholder="Введите название..."
      />
    </div>
  );
}

export default MaterialTitle;
