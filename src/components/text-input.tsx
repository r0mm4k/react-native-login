import React, { ComponentProps, FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

import { theme } from '../core';

type TTextInput = ComponentProps<typeof PaperTextInput> & {
  errorText?: string;
  description?: string;
};

const TextInput: FC<TTextInput> = ({ errorText, description, ...props }) => {
  return (
    <View style={styles.container}>
      <PaperTextInput
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

export { TextInput };
