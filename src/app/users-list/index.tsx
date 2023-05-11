import { useEffect, useState } from 'react';
import { usersStore } from '@/store/usersStore';
import { User } from '../../../types/User';
import { observer } from 'mobx-react-lite';
import UsersListTable from './UsersListTable';

const UsersList = () => {
  const usersFromBackEnd = usersStore.getUsers;
  const [users, setusers] = useState<User[]>([]);

  useEffect(() => {
    const assignUsers = () => {
      setusers(usersFromBackEnd);
    };

    if (usersFromBackEnd) assignUsers();
  }, [usersFromBackEnd]);

  if (!users) return <p>No data</p>;

  if (users.length === 0) return <p>loading...</p>;

  return (
    <>
      <UsersListTable users={users} />
    </>
  );
};

export default observer(UsersList);
