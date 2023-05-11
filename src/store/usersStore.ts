import { autorun, makeAutoObservable } from 'mobx';
import { Role, Status, User } from '../../types/User';

class UsersStore {
  user: User = this.resetUser();
  users: User[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      console.log(`user count: ${this.allUsersCounts}`);
    });
  }

  resetUser() {
    return {
      id: 0,
      name: '',
      email: '',
      role: '',
      status: '',
    };
  }

  setUsers(users: User[]) {
    this.users = users;
    console.log(this.users);
  }

  resetUsers() {
    this.users = [];
  }

  // CRUD
  addUser(newUser: User) {
    this.isLoading = true;
    this.users.push(newUser);
    this.isLoading = false;
  }

  get getUsers() {
    this.isLoading = true;
    return this.users;
  }

  get allUsersCounts() {
    return this.users.length;
  }

  get report() {
    console.log('User report');
    console.log(this.users);
    console.log(this.isLoading);
    return;
  }
}

export const usersStore = new UsersStore();

const fetchUsers = async () => {
  const data = await fetch('http://localhost:4000/users').then((res) =>
    res.json()
  );
  usersStore.setUsers(data);
  return data;
};

fetchUsers();
