import React, { FC, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  BackButton,
  Background,
  Button,
  Header,
  Logo,
  TextInput,
} from '../components';
import { TRootStackParamList } from '../../App';
import { emailValidator, passwordValidator } from '../helpers';

type TLoginScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'LoginScreen'
>;
interface ILoginScreen {
  navigation: TLoginScreenScreenNavigation;
}

const LoginScreen: FC<ILoginScreen> = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onChangeEmail = (text: string) =>
    setEmail((data) => ({ ...data, value: text }));
  const onChangePassword = (text: string) =>
    setPassword((data) => ({ ...data, value: text }));
  const onLogin = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError) setEmail((data) => ({ ...data, error: emailError }));
    if (passwordError) setPassword((data) => ({ ...data, error: emailError }));
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        value={email.value}
        error={!!email.error}
        errorText={email.error}
        onChangeText={onChangeEmail}
      />
      <TextInput
        label="Password"
        value={password.value}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        onChangeText={onChangePassword}
      />

      <Button mode="contained" onPress={onLogin}>
        Login
      </Button>
    </Background>
  );
};

export { LoginScreen };
