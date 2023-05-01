import { v4 as uuidv4 } from 'uuid';
import {
  makeObservable,
  observable,
  computed,
  action,
  flow,
  autorun,
  runInAction,
  makeAutoObservable,
} from 'mobx';
import { Role, Status, User } from '../../types/User';

class UsersStore {
  user: User = this.resetUser();
  users: User[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  resetUser() {
    return {
      id: '',
      name: '',
      email: '',
      role: Role.User,
      status: Status.Active,
    };
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  resetUsers() {
    fetchUsers();
  }

  // CRUD
  addUser(newUser: User) {
    this.users.push(newUser);
  }

  get getUsers() {
    return this.users;
  }

  get report() {
    console.log('User report');
    console.log(this.users);
    return;
  }
}

export const usersStore = new UsersStore();

const fetchUsers = () => {
  fetch('http://localhost:4000/users')
    .then((res) => res.json())
    .then((users) => {
      console.log('🚀 ~ file: usersStore.ts:63 ~ .then ~ users:', users);

      usersStore.setUsers(users);
    });
};

fetchUsers();
