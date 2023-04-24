import React from 'react';
import {View, Text, StyleSheet} from 'react-native/types';

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text>Tela Mensagens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
