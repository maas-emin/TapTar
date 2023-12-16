import NavigationFiles from './NavigationFiles';
import NavigationProcess from './NavigationProcess';

import style from './style.module.css';

function WorkshopNavigation() {
  return (
    <div className={style.aside}>
      <NavigationFiles />
      <NavigationProcess />
    </div>
  );
}

export default WorkshopNavigation;
