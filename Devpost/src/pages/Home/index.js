import React, {useState} from 'react';
import {Text} from 'react-native';
import {Container, ButtonPost, ListPosts} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

function Home() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([
    {id: '1', content: 'TESTE123'},
    {id: '2', content: 'Segundo'},
    {id: '3', content: 'Terceiro'},
  ]);

  return (
    <Container>
      <Header />
      <ListPosts data={posts} renderItem={({item}) => <Text>Teste</Text>} />
      <ButtonPost
        activeOpacity={0.8}
        onPress={() => navigation.navigate('NewPost')}>
        <Feather name="edit-2" color="#fff" size={25} />
      </ButtonPost>
    </Container>
  );
}

export default Home;
