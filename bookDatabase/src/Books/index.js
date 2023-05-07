import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Books({data}) {
  return (
    <View className="p-5 rounded-[5px] bg-white mb-[15px]">
      <Text className="text-xl font-bold text-black">{data.nome}</Text>
      <Text className="text-[17px] italic">R$ {data.preco}</Text>
      <View className="flex-row mt-[15px]">
        <TouchableOpacity
          onPress={() => {}}
          className="bg-[#dd] p-[5px] mr-[15px] rounded-[5px]">
          <Text className="text-black text-base">Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          className="bg-[#dd] p-[5px] mr-[15px] rounded-[5px]">
          <Text className="text-black text-base">Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
