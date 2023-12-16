import { useSelector } from 'react-redux';
import ListItemDocument from './ListItemDocument';
import ListItemImage from './ListItemImage';
import ListItemVideo from './ListItemVideo';
import ListItemAudio from './ListItemAudio';

function MaterialFiles() {
  const image = useSelector(
    (state) => state.userSendMaterial.materials.photo.one,
  );
  const images = useSelector(
    (state) => state.userSendMaterial.materials.photo.group,
  );
  const audio = useSelector(
    (state) => state.userSendMaterial.materials.audio.one,
  );
  const audios = useSelector(
    (state) => state.userSendMaterial.materials.audio.group,
  );
  const video = useSelector(
    (state) => state.userSendMaterial.materials.video.one,
  );
  const videos = useSelector(
    (state) => state.userSendMaterial.materials.video.group,
  );
  const application = useSelector(
    (state) => state.userSendMaterial.materials.document.one,
  );
  const applications = useSelector(
    (state) => state.userSendMaterial.materials.document.group,
  );

  return (
    <>
      {image.length === 0 && images.length === 0 ? null : (
        <ListItemImage image={image} images={images} />
      )}
      {video.length === 0 && videos.length === 0 ? null : (
        <ListItemVideo video={video} videos={videos} />
      )}
      {application.length === 0 && applications.length === 0 ? null : (
        <ListItemDocument
          application={application}
          applications={applications}
        />
      )}
      {audio.length === 0 && audios.length === 0 ? null : (
        <ListItemAudio audio={audio} audios={audios} />
      )}
    </>
  );
}

export default MaterialFiles;
