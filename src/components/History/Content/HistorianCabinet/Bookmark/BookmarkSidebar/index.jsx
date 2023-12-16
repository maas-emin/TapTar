import AsideProcessing from './AsideProcessing';
import AsideProcessed from './AsideProcessed';

import style from './style.module.css';

function BookmarkSidebar() {
  return (
    <div className={style.aside}>
      <AsideProcessing />
      <AsideProcessed />
    </div>
  );
}

export default BookmarkSidebar;
