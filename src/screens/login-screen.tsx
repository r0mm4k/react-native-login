import React, { FC, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
import { emailValidator, passwordValidator } from '../helpers';
import { theme } from '../core';
import { login } from '../api';

type TLoginScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'LoginScreen'
>;
interface ILoginScreen {
  navigation: TLoginScreenScreenNavigation;
}

const LoginScreen: FC<ILoginScreen> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const replaceRegisterScreen = () => navigation.replace('RegisterScreen');
  const showResetPasswordScreen = () =>
    navigation.navigate('ResetPasswordScreen');
  const onChangeEmail = (text: string) => setEmail({ value: text, error: '' });
  const onChangePassword = (text: string) =>
    setPassword({ value: text, error: '' });
  const onLoginValidator = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      if (emailError) setEmail((data) => ({ ...data, error: emailError }));
      if (passwordError)
        setPassword((data) => ({ ...data, error: passwordError }));

      return true;
    }

    return false;
  };
  const onLoginReq = async () => {
    try {
      setLoading(true);

      await login({
        email: email.value,
        password: password.value,
      });
    } catch ({ message }) {
      setLoading(false);
      alert(message);
    }
  };
  const onLogin = async () => {
    if (onLoginValidator()) return;

    await onLoginReq();
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={showResetPasswordScreen}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" loading={loading} onPress={onLogin}>
        Login
      </Button>
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={replaceRegisterScreen}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export { LoginScreen };
