import NavBlocked from './NavBlocked';
import NavNew from './NavNew';
import NavProcessed from './NavProcessed';
import NavProcessing from './NavProcessing';

import style from './style.module.css';

function MaterialsNav() {
  return (
    <div className={style.menu__sidebar}>
      <div className={style.sidebar}>
        <NavNew />
        <NavProcessing />
        <NavProcessed />
        <NavBlocked />
      </div>
    </div>
  );
}

export default MaterialsNav;
