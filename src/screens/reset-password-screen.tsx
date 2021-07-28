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
import { emailValidator } from '../helpers';

type TResetPasswordScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'ResetPasswordScreen'
>;
interface IResetPasswordScreen {
  navigation: TResetPasswordScreenNavigation;
}

const ResetPasswordScreen: FC<IResetPasswordScreen> = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const onChangeEmail = (text: string) =>
    setEmail((data) => ({ ...data, value: text }));
  const onSendInstructions = () => {
    const emailError = emailValidator(email.value);

    if (emailError) setEmail((data) => ({ ...data, error: emailError }));
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="Email"
        value={email.value}
        error={!!email.error}
        errorText={email.error}
        description="You will receive email with password reset link."
        onChangeText={onChangeEmail}
      />
      <Button mode="contained" onPress={onSendInstructions}>
        Send Instructions
      </Button>
    </Background>
  );
};

export { ResetPasswordScreen };
