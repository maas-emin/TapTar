import BookmarkRoutes from './BookmarkRoutes';
import BookmarkSidebar from './BookmarkSidebar';

import style from './style.module.css';

function Bookmark() {
  return (
    <div className={style.contribution}>
      <BookmarkSidebar />
      <BookmarkRoutes />
    </div>
  );
}

export default Bookmark;
