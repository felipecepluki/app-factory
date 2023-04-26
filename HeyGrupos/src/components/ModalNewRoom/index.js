import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ModalNewRoom({setVisible}) {
  const [roomName, setRoomName] = useState('');
  const user = auth().currentUser.toJSON();

  function handleButtonCreate() {
    if (roomName === '') {
      return;
    }
    createRoom();
  }

  function createRoom() {
    firestore()
      .collection('MESSAGE_THREADS')
      .add({
        name: roomName,
        owner: user.uid,
        lastMessage: {
          text: `Grupo ${roomName} criado. Bem vindo(a)!`,
          createdAt: firestore.FieldValue.serverTimestamp(),
        },
      })
      .then(docRef => {
        docRef
          .collection('MESSAGES')
          .add({
            text: `Grupo ${roomName} criado. Bem vindo(a)!`,
            createdAt: firestore.FieldValue.serverTimestamp(),
            system: true,
          })
          .then(() => {
            setVisible();
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container} onPress={setVisible}>
      <TouchableWithoutFeedback>
        <View style={styles.modal} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Criar um novo Grupo</Text>
        <TextInput
          value={roomName}
          onChangeText={text => setRoomName(text)}
          placeholder="Nome para sua sala ?"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={handleButtonCreate}>
          <Text style={styles.buttonText}>Criar sala</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={setVisible}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ModalNewRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34, 34, 34, 0.4)',
  },
  modal: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    marginTop: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
  input: {
    borderRadius: 4,
    height: 45,
    backgroundColor: '#ddd',
    marginVertical: 15,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  buttonCreate: {
    borderRadius: 4,
    backgroundColor: '#2e54d4',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
