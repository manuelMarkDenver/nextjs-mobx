import { useEffect, useState } from 'react';
import { usersStore } from '@/store/usersStore';
import { User } from '../../../types/User';
import { observer } from 'mobx-react-lite';
import UsersListTable from './UsersListTable';

const UsersList = () => {
  const usersFromBackEnd = usersStore.getUsers;
  const [users, setusers] = useState<User[]>([]);

const handleDelete: any = (id: any) => {
  console.log("🚀 ~ file: UsersListTable.tsx:16 ~ id:", id)
  usersStore.deleteUser(id);
};

  useEffect(() => {
    const assignUsers = () => {
      setusers(usersFromBackEnd);
    };

    if (usersFromBackEnd) assignUsers();
  }, [usersFromBackEnd]);

  if (!users) return <p>No data</p>;

  if (users.length === 0) return <p>No users yet.</p>;

  return (
    <>
      <UsersListTable users={users} onDelete={handleDelete}/>
    </>
  );
};

export default observer(UsersList);
