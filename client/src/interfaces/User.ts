export interface User {
  _id: string;
  first: string;
  last: string;
  email: string;
}

export interface UserStore extends User {
  updateUser: (payload: User) => void;
  removeUser: () => void;
}
