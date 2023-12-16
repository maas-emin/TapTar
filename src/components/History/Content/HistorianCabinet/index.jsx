import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import CabinetFileTagsDialog from '../../General/CabinetFileTagsDialog';
import Dialog from '../../General/Dialog';
import DialogDeleteCabinetFile from './DialogDeleteCabinetFile';
import HistorianSending from './HistorianSending';
import MyMaterialsFiles from './Bookmark';
import ShowMaterial from './ShowHistorianMaterial';
import DialogSelectedTags from '../../General/DialogSelectedTags';
import DialogDeleteCabinetMaterial from './DialogDeleteCabinetMaterial';

function HistorianCabinet() {
  const openShow = useSelector((state) => state.showFileCabinet.open);
  const openDeleteFile = useSelector(
    (state) => state.application.bookmarkDialog.open,
  );
  const openDeleteMaterial = useSelector(
    (state) => state.application.bookmarkMaterial,
  );

  return (
    <>
      <Switch>
        <Route
          exact
          path="/history/my-materials/:name?"
          component={MyMaterialsFiles}
        />
        <Route
          path="/history/my-materials/historian/send"
          component={HistorianSending}
        />
        <Route
          path="/history/my-materials/show/:id?"
          component={ShowMaterial}
        />
        <Redirect to="/history/my-materials" />
      </Switch>
      <Dialog open={openShow}>
        <CabinetFileTagsDialog open={openShow} />
      </Dialog>
      <DialogSelectedTags open={openDeleteFile}>
        <DialogDeleteCabinetFile open={openDeleteFile} />
      </DialogSelectedTags>
      <DialogSelectedTags open={openDeleteMaterial}>
        <DialogDeleteCabinetMaterial />
      </DialogSelectedTags>
    </>
  );
}

export default HistorianCabinet;
