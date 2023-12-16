import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';
import ListItemVideo from './ListItemVideo';
import ListItemAudio from './ListItemAudio';
import { useSelector } from 'react-redux';

function MaterialFiles(props) {
  const images = useSelector(
    (state) => state.historianSendMaterial.materials.photo,
  );
  const audios = useSelector(
    (state) => state.historianSendMaterial.materials.audio,
  );
  const videos = useSelector(
    (state) => state.historianSendMaterial.materials.video,
  );
  const applications = useSelector(
    (state) => state.historianSendMaterial.materials.document,
  );

  return (
    <>
      {images.length === 0 ? null : <ListItemImage images={images} />}
      {applications.length === 0 ? null : (
        <ListItemDocument applications={applications} />
      )}
      {videos.length === 0 ? null : <ListItemVideo videos={videos} />}
      {audios.length === 0 ? null : <ListItemAudio audios={audios} />}
    </>
  );
}

export default MaterialFiles;
