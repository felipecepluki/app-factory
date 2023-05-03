import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Search() {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite o nome da sala"
          value={input}
          onChangeText={text => setInput(text)}
          style={styles.input}
          autoCapitalize={'none'}
        />
        <TouchableOpacity style={styles.buttonSearch}>
          <MaterialIcons name="search" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 14,
  },
  input: {
    backgroundColor: '#ebebeb',
    marginLeft: 10,
    height: 50,
    width: '80%',
    borderRadius: 4,
    padding: 5,
  },
  buttonSearch: {
    backgroundColor: '#2e54d4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    marginLeft: 5,
    marginRight: 10,
  },
});
