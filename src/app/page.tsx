'use client';
import { Suspense } from 'react';

import { usersStore } from '../store/usersStore';
import { observer } from 'mobx-react-lite';
import AddUser from './add-user/page';
import { User } from '../../types/User';

const handleOnClick = () => {
  usersStore.report;
};

const Home = () => {
  const users = usersStore.usersList;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>NextJS with MobX</h1>
      <button onClick={handleOnClick}>Click Me</button>
      <AddUser />

      <p>Users List</p>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ul>
          {users.length ? users.map((user: User, index: number) => {
            return (
              <li key={index}>
                {user.name} | {user.email} | {user.role}
              </li>
            );
          }) : (<p>No users yet</p>)}
        </ul>
      </Suspense>
    </main>
  );
};

export default observer(Home);
