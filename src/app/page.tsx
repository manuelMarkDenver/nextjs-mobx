'use client'

import { usersStore } from '../store/usersStore';
import { observer } from 'mobx-react-lite';

const handleOnClick = () => {
  usersStore.report
};

const Home = () => {
  const users = usersStore.usersList

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>NextJS with MobX</h1>
      <button onClick={handleOnClick}>Click Me</button>
      <p>Users List</p>
      <p>{JSON.stringify(users)}</p>
    </main>
  );
};

export default observer(Home);
