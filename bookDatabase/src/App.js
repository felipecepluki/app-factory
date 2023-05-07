import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Books from './Books';

export default function App() {
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
      />
      <Text className="text-[25px] ml-[15px] mt-[10px] text-white">Preço</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        className="h-10 ml-[15px] mb-[10px] mr-[15px] p-[5px] rounded-[5px] bg-white text-xl"
      />
      <View className="items-center flex-row justify-around">
        <TouchableOpacity
          onPress={() => {}}
          className="bg-white h-10 rounded-[5px] p-[5px]">
          <Text className="text-[17px] text-center">Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          className="bg-white h-10 rounded-[5px] p-[5px]">
          <Text className="text-[17px] text-center">Editar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[{id: 1, nome: 'JavaScript do zero', preco: '19.90'}]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Books data={item} />}
      />
    </View>
  );
}
