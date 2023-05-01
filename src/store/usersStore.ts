import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, computed, autorun } from 'mobx';
import { User } from '../../types/User';

class UsersStore {
  user: User = this.resetUser();
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      user: observable,
      users: observable,
      report: computed,
      usersList: computed,
    });
  }

  resetUser() {
    return {
      id: uuidv4(),
      name: '',
      email: '',
      role: 'user',
      status: 'active',
    };
  }

  setUsers(users: User[]) {
    this.users = users
  }

  get usersList() {
    return this.users;
  }

  get report() {
    console.log('User report');
    console.log(this.users)
    return;
  }

}

fetch('http://localhost:4000/users')
  .then(res => res.json())
  .then(users => usersStore.setUsers(users))

export const usersStore = new UsersStore();
