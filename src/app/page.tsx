'use client';

import { Suspense } from 'react';

import { usersStore } from '../store/usersStore';
import { observer } from 'mobx-react-lite';
import { User } from '../../types/User';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const users = usersStore.users;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-red-700'>NextJS with MobX</h1>
      <Link
        href='/add-user'
        className='bg-gray-700 text-white px-4 py-2 rounded-md'
      >
        Add A User
      </Link>

      <p>Users List</p>
      <ul>
        {users ? (
          users?.map((user: User, index: number) => {
            return (
              <li key={index}>
                {user.name} | {user.email} | {user.role}
              </li>
            );
          })
        ) : (
          <p>No users yet</p>
        )}
      </ul>
    </main>
  );
};

export default observer(Home);
