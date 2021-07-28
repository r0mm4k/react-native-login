import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { theme } from '../core';

const Header: FC = (props) => {
  return <Text style={styles.header} {...props} />;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});

export { Header };
