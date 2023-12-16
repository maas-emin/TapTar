import React from 'react';
import { useSelector } from 'react-redux';
import AddAvatar from './AddAvatar';
import UserAvatar from './UserAvatar';

export default function CurrentUserAvatar() {
  const editUser = useSelector((state) => state.application.editUser);

  return !editUser ? (
    <UserAvatar editUser={editUser} />
  ) : (
    <AddAvatar editUser={editUser} />
  );
}
