import ContributionSidebar from './ContributionSidebar';
import ContributionRoutes from './ContributionRoutes';
import CabinetFileTagsDialog from '../../General/CabinetFileTagsDialog';
import { useSelector } from 'react-redux';
import Dialog from '../../General/Dialog';

import style from './style.module.css';

function Contribution() {
  const openShow = useSelector((state) => state.showFileCabinet.open);

  return (
    <div className={style.contribution}>
      <ContributionSidebar />
      <ContributionRoutes />
      <Dialog open={openShow}>
        <CabinetFileTagsDialog open={openShow} />
      </Dialog>
    </div>
  );
}

export default Contribution;
