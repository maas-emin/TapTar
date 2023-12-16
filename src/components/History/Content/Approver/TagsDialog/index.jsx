import { useSelector } from 'react-redux';
import DialogContainer from './DialogContainer';

function TagsDialog() {
  const open = useSelector((state) => state.application.approverMaterial.open);

  if (!open) {
    return null;
  }

  return <DialogContainer />;
}

export default TagsDialog;
