import { useSelector } from 'react-redux';
import DialogContainer from './DialogContainer';

function TagsDialogNew() {
  const open = useSelector(
    (state) => state.application.workplaceMaterialNew.open,
  );

  if (!open) {
    return null;
  }

  return <DialogContainer />;
}

export default TagsDialogNew;
