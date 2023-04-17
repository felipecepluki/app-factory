import React, {useState, useLayoutEffect, useContext} from 'react';
import {Container, Input, Button, ButtonText} from './styles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {AuthContext} from '../../contexts/auth';

function NewPost() {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  const [post, setPost] = useState('');

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, post]);

  async function handlePost() {
    if (post === '') {
      console.log('Seu post contem conteudo invalido');
      return;
    }
    let avatarUrl = null;
    try {
      let response = await storage().ref('users').child(user?.uid);
      avatarUrl = response;
    } catch (err) {
      avatarUrl = null;
    }
    await firestore()
      .collection('posts')
      .add({
        created: new Date(),
        content: post,
        autor: user?.nome,
        userId: user?.uid,
        avatarUrl,
      })
      .then(() => {
        setPost('');
        console.log('Post criado com sucesso!');
      })
      .catch(error => {
        console.log('Erro ao criar post', error);
      });
    navigation.goBack();
  }

  return (
    <Container>
      <Input
        placeholder="O que está acontecendo ?"
        value={post}
        onChangeText={text => setPost(text)}
        autoCorrect={false}
        multiline={true}
        placeholderTextColor="#ddd"
        maxLength={300}
      />
    </Container>
  );
}

export default NewPost;
