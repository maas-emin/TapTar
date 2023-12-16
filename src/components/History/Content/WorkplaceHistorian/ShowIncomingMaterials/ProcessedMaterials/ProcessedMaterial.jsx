import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteReject } from '../../../../../../redux/ducks/incomingMaterials';
import MaterialCardComponent from '../../../../General/MaterialCardComponent';

function ProcessedMaterial({ material }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const types = material?.info?.types;

  const titleSub = material.title.substr(0, 33);
  const title = material.title;
  const currentTitle = title.length >= 33 ? `${titleSub}...` : title;
  const data = moment(material.created_at).locale('ru').format('DD.MM.YYYY');
  const currentId = material.process_id || material.id;
  const onPush = () => {
    dispatch(deleteReject());
    history.push(`/history/incoming-materials/processed/${currentId}`);
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

export default ProcessedMaterial;
