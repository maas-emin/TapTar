import { Route, Redirect, Switch } from 'react-router-dom';
import ShowIncomingMaterials from './ShowIncomingMaterials';
import ShowProcessedMaterial from './ShowProcessedMaterial';
import ShowProcessMaterial from './ShowProcessMaterial';
import ShowNewMaterial from './ShowNewMaterial';
import Dialog from '../../General/Dialog';
import TagsDialog from './TagsDialog';
import { useSelector } from 'react-redux';
import DialogSelectedTags from '../../General/DialogSelectedTags';
import DialogWorkWithMaterial from './DialogWorkWithMaterial';
import DialogWorkWithReject from './DialogWorkWithReject';

function Approver() {
  const approverMaterial = useSelector(
    (state) => state.application.approverMaterial.open,
  );
  const approverButtons = useSelector(
    (state) => state.application.approverButtons.open,
  );
  const approverReject = useSelector(
    (state) => state.application.approverReject,
  );

  return (
    <>
      <Switch>
        <Route
          exact
          path="/history/approver/:name?"
          component={ShowIncomingMaterials}
        />
        <Route path="/history/approver/new/:id?" component={ShowNewMaterial} />
        <Route
          path="/history/approver/process/:id?"
          component={ShowProcessMaterial}
        />
        <Route
          path="/history/approver/processed/:id?"
          component={ShowProcessedMaterial}
        />
        <Redirect to="/history/approver" />
      </Switch>
      <Dialog open={approverMaterial}>
        <TagsDialog />
      </Dialog>
      <DialogSelectedTags open={approverButtons}>
        <DialogWorkWithMaterial />
      </DialogSelectedTags>
      <DialogSelectedTags open={approverReject}>
        <DialogWorkWithReject />
      </DialogSelectedTags>
    </>
  );
}

export default Approver;
