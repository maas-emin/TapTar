import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../../General/buttons/CloseButton/CloseButton';
import DialogSelectedTags from '../../General/DialogSelectedTags';
import ChangeRoleMaster from './ChangeRoleMaster';
import DialogPass from './DialogPass/DialogPass';
import DialogMaster from './DialogMaster';
import { closeEditUser } from '../../../../redux/ducks/application';
import CurrentUserAvatar from './CurrentUserAvatar';
import UserForms from './UserForms';
import ProfileButtons from './ProfileButtons';
import SaveButton from './ProfileButtons/SaveButton';

import style from './style.module.css';

function Profile() {
  const dispatch = useDispatch();

  const masterError = useSelector((state) => state.user.masterError);
  const currentUser = useSelector((state) => state.user.currentUser);
  const editUserPass = useSelector((state) => state.application.editUserPass);
  const editUser = useSelector((state) => state.application.editUser);

  const [currentUserName, setCurrentUserName] = useState(currentUser.name);
  const [currentUserEmail, setCurrentUserEmail] = useState(currentUser.email);

  const handleChangeName = (e) => {
    setCurrentUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setCurrentUserEmail(e.target.value);
  };

  const clickCloseEditUser = () => {
    dispatch(closeEditUser());
  };

  return (
    <div className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.user}>
          {!editUser ? null : (
            <CloseButton
              bgColor="#f5f5f5"
              handleClick={clickCloseEditUser}
              width="25px"
              height="25px"
              top="10px"
              right="13px"
              boxShadow="none"
            />
          )}
          <CurrentUserAvatar />
          <UserForms
            currentUserEmail={currentUserEmail}
            currentUserName={currentUserName}
            handleChangeEmail={handleChangeEmail}
            handleChangeName={handleChangeName}
          />
          <ChangeRoleMaster />
          <ProfileButtons />
        </div>
        <SaveButton
          currentUserName={currentUserName}
          currentUserEmail={currentUserEmail}
        />
      </div>
      <DialogSelectedTags open={editUserPass}>
        <DialogPass />
      </DialogSelectedTags>
      <DialogSelectedTags open={masterError}>
        <DialogMaster />
      </DialogSelectedTags>
    </div>
  );
}

export default Profile;
