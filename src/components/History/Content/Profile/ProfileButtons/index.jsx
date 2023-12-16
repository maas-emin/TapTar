import React from 'react';
import { useSelector } from 'react-redux';
import ChangePassUser from './ChangePassUser';
import EditUserButtons from './EditUserButtons';

export default function ProfileButtons() {
  const editUser = useSelector((state) => state.application.editUser);

  return editUser ? <ChangePassUser /> : <EditUserButtons />;
}
