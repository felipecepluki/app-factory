import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native/types';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false);

  function handleLogin() {
    if (type) {
      if (name === '' || email === '' || password === '') {
        return;
      }
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          user.user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              navigation.goBack();
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('E-mail já em uso!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('E-mail inválido!');
          }
        });
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.goBack();
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('E-mail inválido!');
          }
        });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>HeyGrupos</Text>
      <Text style={{marginBottom: 20}}>Ajude, colabore, faça networking!</Text>
      {type && (
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Qual seu nome ?"
          placeholderTextColor="#99999b"
        />
      )}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Seu e-mail ?"
        placeholderTextColor="#99999b"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Sua senha"
        placeholderTextColor="#99999b"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[
          styles.buttonLogin,
          {backgroundColor: type ? '#f53745' : '#57dd86'},
        ]}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>{type ? 'Cadastrar' : 'Acessar'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setType(!type)}>
        <Text>{type ? 'Já possuo uma conta' : 'Criar uma nova conta'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? 55 : 80,
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    color: '#121212',
    backgroundColor: '#ebebeb',
    width: '90%',
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 50,
  },
  buttonLogin: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },
});
