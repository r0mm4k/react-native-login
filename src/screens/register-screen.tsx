import React, { FC, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import {
  BackButton,
  Background,
  Button,
  GoogleLogin,
  Header,
  Logo,
  TextInput,
} from '../components';
import { TRootStackParamList } from '../../App';
import { emailValidator, nameValidator, passwordValidator } from '../helpers';
import { theme } from '../core';
import { signUp } from '../api';

type TRegisterScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'RegisterScreen'
>;
interface IRegisterScreen {
  navigation: TRegisterScreenScreenNavigation;
}

const RegisterScreen: FC<IRegisterScreen> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const replaceLoginScreen = () => navigation.replace('LoginScreen');
  const onChangeName = (text: string) => setName({ value: text, error: '' });
  const onChangeEmail = (text: string) => setEmail({ value: text, error: '' });
  const onChangePassword = (text: string) =>
    setPassword({ value: text, error: '' });
  const onSignUpValidator = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (nameError || emailError || passwordError) {
      if (nameError) setName((data) => ({ ...data, error: nameError }));
      if (emailError) setEmail((data) => ({ ...data, error: emailError }));
      if (passwordError)
        setPassword((data) => ({ ...data, error: passwordError }));

      return true;
    }

    return false;
  };
  const onSignUpReq = async () => {
    try {
      setLoading(true);

      await signUp({
        name: name.value,
        email: email.value,
        password: password.value,
      });
    } catch ({ message }) {
      setLoading(false);
      alert(message);
    }
  };
  const onSignUp = async () => {
    if (onSignUpValidator()) return;

    await onSignUpReq();
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        value={name.value}
        error={!!name.error}
        errorText={name.error}
        onChangeText={onChangeName}
      />
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
      <Button mode="contained" loading={loading} onPress={onSignUp}>
        Sign Up
      </Button>
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={replaceLoginScreen}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export { RegisterScreen };
