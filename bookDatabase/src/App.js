import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import getRealm from './services/realm';
import Books from './Books';

export default function App() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [books, setBooks] = useState('');
  const [idEdit, setIdEdit] = useState(null);
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    async function loadBooks() {
      const realm = await getRealm();
      const data = realm.objects('Book');
      setBooks(data);
    }
    loadBooks();
  }, []);

  async function saveBook(data) {
    const realm = await getRealm();
    const id =
      realm.objects('Book').sorted('id', true).length > 0
        ? realm.objects('Book').sorted('id', true)[0].id + 1
        : 1;
    const dadosLivro = {
      id: id,
      nome: data.nome,
      preco: data.preco,
    };
    realm.write(() => {
      realm.create('Book', dadosLivro);
    });
  }

  async function addBook() {
    if (nome === '' || preco === '') {
      alert('Preencha todos os campos!');
      return;
    }
    try {
      const data = {nome: nome, preco: preco};
      await saveBook(data);
      setNome('');
      setPreco('');
      Keyboard.dismiss();
    } catch (err) {
      alert(err);
    }
  }

  function editarBook(data) {
    setNome(data.nome);
    setPreco(data.preco);
    setIdEdit(data.id);
    setDisabledBtn(true);
  }

  async function editBook() {
    if (idEdit === null) {
      alert('Você não pode editar');
      return;
    }
    const realm = await getRealm();
    const response = {
      id: idEdit,
      nome: nome,
      preco: preco,
    };
    await realm.write(() => {
      realm.create('Book', response, 'modified');
    });
    const dadosAlterados = await realm.objects('Book').sorted('id', false);
    setBooks(dadosAlterados);
    setNome('');
    setPreco('');
    setIdEdit(null);
    setDisabledBtn(false);
    Keyboard.dismiss();
  }

  return (
    <View className="flex-1 bg-[#373737] pt-[45px]">
      <Text className="text-[35px] text-center text-white font-bold">
        Próximos livros
      </Text>
      <Text className="text-[25px] ml-[15px] mt-[10px] text-white">Nome</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        className="h-10 ml-[15px] mb-[10px] mr-[15px] p-[5px] rounded-[5px] bg-white text-xl"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <Text className="text-[25px] ml-[15px] mt-[10px] text-white">Preço</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        className="h-10 ml-[15px] mb-[10px] mr-[15px] p-[5px] rounded-[5px] bg-white text-xl"
        value={preco}
        onChangeText={text => setPreco(text)}
      />
      <View className="items-center flex-row justify-around">
        <TouchableOpacity
          onPress={addBook}
          disabled={disabledBtn}
          style={{opacity: disabledBtn ? 0.1 : 1}}
          className="bg-white h-10 rounded-[5px] p-[5px]">
          <Text className="text-[17px] text-center">Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={editBook}
          className="bg-white h-10 rounded-[5px] p-[5px]">
          <Text className="text-[17px] text-center">Editar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={books}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Books data={item} editar={editarBook} />}
        className="px-5 mt-5"
      />
    </View>
  );
}
