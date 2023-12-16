import { useSelector } from 'react-redux';
import DialogContainer from './DialogContainer';

function TagsDialog() {
  const open = useSelector((state) => state.application.workplaceMaterial.open);

  if (!open) {
    return null;
  }

  return <DialogContainer />;
}

export default TagsDialog;
