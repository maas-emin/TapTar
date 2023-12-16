import { useSelector } from 'react-redux';
import DialogContainer from './DialogContainer';
import DialogPreload from './DialogPreload';

function CabinetFileTagsDialog(props) {
  const loading = useSelector((state) => state.showFileCabinet.loading);

  if (!props.open) {
    return null;
  }

  if (loading) {
    return <DialogPreload />;
  }

  return <DialogContainer />;
}

export default CabinetFileTagsDialog;
