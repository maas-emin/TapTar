import { useSelector } from 'react-redux';
import ChatImageMain from './ChatImageMain';

function DialogShowImage() {
  const showImage = useSelector((state) => state.application.showImage);

  if (!showImage.open) return null;

  return <ChatImageMain />;
}

export default DialogShowImage;
