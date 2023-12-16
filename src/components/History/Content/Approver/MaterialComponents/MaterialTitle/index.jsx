import { useSelector } from 'react-redux';

import style from './style.module.css';

function MaterialTitle() {
  const title = useSelector((state) => state.approver.material.title);

  return (
    <div className={style.form__name}>
      <div className={style.form__title}>{title}</div>
    </div>
  );
}

export default MaterialTitle;
