import { useSelector } from 'react-redux';
import AffiliationContainer from './AffiliationContainer';

function ChangeAffiliationDialog() {
  const open = useSelector((state) => state.application.changeFiles.open);

  if (!open) return null;

  return <AffiliationContainer />;
}

export default ChangeAffiliationDialog;
