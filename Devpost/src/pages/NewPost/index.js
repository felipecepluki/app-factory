import React, {useState, useLayoutEffect} from 'react';
import {Container, Input, Button, ButtonText} from './styles';
import {useNavigation} from '@react-navigation/native';

function NewPost() {
  const navigation = useNavigation();
  const [post, setPost] = useState('');

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, post]);

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
