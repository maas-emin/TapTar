import moment from 'moment';
import { useHistory } from 'react-router-dom';
import MaterialCardComponent from '../../../../General/MaterialCardComponent';

function BlockedMaterial({ material }) {
  const history = useHistory();

  const types = material?.info?.types;

  const titleSub = material.title.substr(0, 33);
  const title = material.title;
  const currentTitle = title.length >= 33 ? `${titleSub}...` : title;
  const data = moment(material.created_at).locale('ru').format('DD.MM.YYYY');
  const currentId = material.process_id || material.id;
  const onPush = () => {
    history.push(`/history/incoming-materials/blocked/${currentId}`);
  };

  return (
    <MaterialCardComponent
      types={types}
      data={data}
      currentTitle={currentTitle}
      onPush={onPush}
    />
  );
}

export default BlockedMaterial;
