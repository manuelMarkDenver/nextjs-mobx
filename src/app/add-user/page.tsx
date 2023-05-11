'use client';

import { useFormik } from 'formik';
import { Role, Status } from '../../../types/User';
import { usersStore } from '@/store/usersStore';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const handleSubmit = (values: any) => {
  console.log('here at handleSubmit:', values);
  const { name, email, role } = values;
  const maxNum = usersStore.getUsers && usersStore.getUsers.length + 1;
  usersStore.addUser({
    id: maxNum,
    name,
    email,
    role,
    status: Status.Active,
  });
};

const AddUser = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: 'User',
      status: 'Active',
    },
    onSubmit: (values: any) => {
      handleSubmit(values);
      formik.resetForm();
      router.push('/');
    },
  });
  return (
    <div className='container max-w-md mx-auto my-auto flex flex-col items-center justify-center h-screen'>
      <Link
        href='/'
        className='bg-gray-700 text-white px-4 py-2 rounded-md mb-4'
      >
        Back
      </Link>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <div className='mb-4 bg-slate-300'>
          <label className='mr-4' htmlFor='name'>
            Name
          </label>
          <input
            className='bg-slate-700 text-white'
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name here'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className='mb-4 bg-slate-300'>
          <label className='mr-4' htmlFor='email'>
            Email
          </label>
          <input
            className='bg-slate-700 text-white'
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email here'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className='mb-4 bg-slate-300'>
          <label className='mr-4' htmlFor='role'>
            Email Address
          </label>
          <select
            name='role'
            id='role'
            onChange={formik.handleChange}
            value={formik.values.role}
          >
            {Object.keys(Role).map((key: string) => {
              return typeof key !== 'number' ? (
                <option key={key} value={Role[key as keyof typeof Role]}>
                  {Role[key as keyof typeof Role]}
                </option>
              ) : null;
            })}
          </select>
        </div>

        <input
          className='bg-gray-700 text-white px-4 py-2 rounded-md'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default observer(AddUser);
