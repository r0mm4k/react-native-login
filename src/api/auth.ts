import firebase from 'firebase/app';
import 'firebase/auth';

interface ISignUp {
  name: string;
  email: string;
  password: string;
}

const signUp = async ({ name, email, password }: ISignUp) => {
  const user = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await firebase.auth().currentUser?.updateProfile({ displayName: name });

  return user;
};

interface ILogin {
  email: string;
  password: string;
}

const login = async ({ email, password }: ILogin) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

interface IResetPassword {
  email: string;
}

const resetPassword = async ({ email }: IResetPassword) => {
  await firebase.auth().sendPasswordResetEmail(email);
};

const logout = async () => {
  await firebase.auth().signOut();
};

export { signUp, login, resetPassword, logout };
