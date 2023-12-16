import { Route, Redirect, Switch } from 'react-router-dom';
import ShowIncomingMaterials from './ShowIncomingMaterials';
import ShowNewMaterial from './ShowNewMaterial';
import ShowProcessedMaterial from './ShowProcessedMaterial';
import ShowProcessMaterial from './ShowProcessMaterial';
import ShowBlockedMaterial from './ShowBlockedMaterial';
import DialogWorkWithMaterial from './DialogWorkWithMaterial';
import TagsDialog from './TagsDialog';
import { useSelector } from 'react-redux';
import Dialog from '../../General/Dialog';
import DialogSelectedTags from '../../General/DialogSelectedTags';
import TagsDialogNew from './TagsDialogNew';
import ChangeAffiliationDialog from './ShowProcessMaterial/ChangeAffiliationDialog';
import DialogDeleteFile from './ShowProcessMaterial/DialogDeleteFile';
import DialogDeleteMaterial from './DialogDeleteMaterial';
import DialogDeleteMessage from '../Messenger/DialogDeleteMessage';

function WorkplaceHistorian() {
  const workplaceMaterial = useSelector(
    (state) => state.application.workplaceMaterial.open,
  );
  const workplaceMaterialNew = useSelector(
    (state) => state.application.workplaceMaterialNew.open,
  );
  const workplaceMaterialProcess = useSelector(
    (state) => state.application.workplaceMaterialProcess.open,
  );
  const workplaceButtons = useSelector(
    (state) => state.application.workplaceButtons.open,
  );
  const workplaceReject = useSelector(
    (state) => state.application.workplaceReject,
  );
  const userSendDelete = useSelector(
    (state) => state.application.userSendDelete.open,
  );
  const deleteMessage = useSelector(
    (state) => state.application.deleteMessage.open,
  );

  return (
    <>
      <Switch>
        <Route
          exact
          path="/history/incoming-materials/:name?"
          component={ShowIncomingMaterials}
        />
        <Route
          path="/history/incoming-materials/new/:id?"
          component={ShowNewMaterial}
        />
        <Route
          path="/history/incoming-materials/blocked/:id?"
          component={ShowBlockedMaterial}
        />
        <Route
          path="/history/incoming-materials/process/:id?"
          component={ShowProcessMaterial}
        />
        <Route
          path="/history/incoming-materials/processed/:id?"
          component={ShowProcessedMaterial}
        />
        <Redirect to="/history/incoming-materials" />
      </Switch>
      <Dialog open={workplaceMaterial}>
        <TagsDialog />
      </Dialog>
      <Dialog open={workplaceMaterialNew}>
        <TagsDialogNew />
      </Dialog>
      <Dialog open={workplaceMaterialProcess}>
        <ChangeAffiliationDialog />
      </Dialog>
      <DialogSelectedTags open={workplaceButtons}>
        <DialogWorkWithMaterial />
      </DialogSelectedTags>
      <DialogSelectedTags open={userSendDelete}>
        <DialogDeleteFile />
      </DialogSelectedTags>
      <DialogSelectedTags open={workplaceReject}>
        <DialogDeleteMaterial />
      </DialogSelectedTags>
      <DialogSelectedTags open={deleteMessage}>
        <DialogDeleteMessage open={deleteMessage} />
      </DialogSelectedTags>
    </>
  );
}

export default WorkplaceHistorian;
