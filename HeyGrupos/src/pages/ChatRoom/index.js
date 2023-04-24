import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native/types';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function ChatRoom() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Tela ChatRoom</Text>
      <Button title="Login" onPress={() => navigation.navigate('SignIn')} />
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
