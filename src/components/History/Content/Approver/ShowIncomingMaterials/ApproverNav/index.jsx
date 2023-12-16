import NavNew from './NavNew';
import NavProcessed from './NavProcessed';
import NavProcessing from './NavProcessing';

import style from './style.module.css';

function ApproverNav() {
  return (
    <div className={style.menu__sidebar}>
      <div className={style.sidebar}>
        <NavNew />
        <NavProcessing />
        <NavProcessed />
      </div>
    </div>
  );
}

export default ApproverNav;
