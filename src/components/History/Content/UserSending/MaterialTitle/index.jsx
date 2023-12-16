import { useSelector, useDispatch } from 'react-redux';
import { changeTitle } from '../../../../../redux/actions/userSendMaterial';

import style from './style.module.css';

function MaterialTitle() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.userSendMaterial.materials.title);

  const handleChange = (e) => {
    dispatch(changeTitle(e.target.value));
  };

  return (
    <>
      <div className={style.title__info}>
        Убедительная просьба присылать в одном материале информацию одной
        тематики или одного периода!
        {/* <span onClick={handleOpen}>?</span> */}
      </div>
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
    </>
  );
}

export default MaterialTitle;
