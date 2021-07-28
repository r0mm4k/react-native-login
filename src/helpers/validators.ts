const nameValidator = (name: string) => {
  if (!name) return "Name can't be empty.";
  return '';
};

const passwordValidator = (password: string) => {
  if (!password) return "Password can't be empty.";
  if (password.length < 6)
    return 'Password must be at least 6 characters long.';
  return '';
};

const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if (!re.test(email)) return 'Ooops! We need a valid email address.';
  return '';
};

export { nameValidator, passwordValidator, emailValidator };
