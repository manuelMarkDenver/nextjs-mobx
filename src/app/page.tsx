'use client';

import Link from 'next/link';
import UsersList from './users-list';

const Home = () => {
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
      <UsersList />
    </main>
  );
};

export default Home;
