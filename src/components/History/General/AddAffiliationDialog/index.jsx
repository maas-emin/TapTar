import { useSelector } from 'react-redux';
import AffiliationContainer from './AffiliationContainer';

function AddAffiliationDialog() {
  const open = useSelector((state) => state.uploadFiles.open);

  if (!open) return null;

  return <AffiliationContainer />;
}

export default AddAffiliationDialog;
