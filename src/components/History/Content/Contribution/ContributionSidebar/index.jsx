import AsideProcessed from './AsideProcessed';
import AsideProcessing from './AsideProcessing';

import style from './style.module.css';

function ContributionSidebar() {
  return (
    <div className={style.aside}>
      <AsideProcessing />
      <AsideProcessed />
    </div>
  );
}

export default ContributionSidebar;
