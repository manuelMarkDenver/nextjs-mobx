import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, computed, autorun, action } from 'mobx';
import { Role, Status, User } from '../../types/User';

class UsersStore {
  user: User = this.resetUser();
  users: User[] = [];
  loading: boolean = true

  constructor() {
    makeObservable(this, {
      user: observable,
      users: observable,
      loading: observable,
      report: computed,
      usersList: computed,
      addUser: action,
    });
  }

  resetUser() {
    return {
      id: uuidv4(),
      name: '',
      email: '',
      role: Role.User,
      status: Status.Active,
    };
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  addUser(newUser: User) {
    this.loading = false
    this.users.push(newUser);
    this.loading = true
  }

  get usersList() {
    return this.users;
  }

  get report() {
    console.log('User report');
    console.log(this.users);
    return;
  }
}

// fetch('http://localhost:4000/users')
//   .then((res) => res.json())
//   .then((users) => usersStore.setUsers(users));

export const usersStore = new UsersStore();
