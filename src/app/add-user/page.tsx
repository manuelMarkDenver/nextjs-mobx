'use client';

import { useFormik } from 'formik';
import { Role, Status } from '../../../types/User';
import { usersStore } from '@/store/usersStore';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';

const handleSubmit = (values: any) => {
  console.log('here at handleSubmit:', values);
  const { name, email, role } = values;
  usersStore.addUser({
    id: uuidv4(),
    name,
    email,
    role,
    status: Status.Active,
  });
};

const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: 'User',
    },
    onSubmit: (values: any) => {
      handleSubmit(values);
      formik.resetForm()
    },
  });
  return (
    <>
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

        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default observer(AddUser);
