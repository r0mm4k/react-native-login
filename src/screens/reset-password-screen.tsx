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
import { resetPassword } from '../api';

type TResetPasswordScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'ResetPasswordScreen'
>;
interface IResetPasswordScreen {
  navigation: TResetPasswordScreenNavigation;
}

const ResetPasswordScreen: FC<IResetPasswordScreen> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({ value: '', error: '' });

  const onChangeEmail = (text: string) => setEmail({ value: text, error: '' });
  const onSendInstructionsValidator = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail((data) => ({ ...data, error: emailError }));
      return true;
    }

    return false;
  };
  const onSendInstructionsReq = async () => {
    try {
      setLoading(true);

      await resetPassword({ email: email.value });

      alert('Email with password has been sent.');
    } catch ({ message }) {
      alert(message);
    } finally {
      setLoading(false);
    }
  };
  const onSendInstructions = async () => {
    if (onSendInstructionsValidator()) return;

    await onSendInstructionsReq();
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
      <Button mode="contained" loading={loading} onPress={onSendInstructions}>
        Send Instructions
      </Button>
    </Background>
  );
};

export { ResetPasswordScreen };
