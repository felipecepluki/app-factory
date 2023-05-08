import { View, Text, TouchableOpacity } from "react-native";

export default function Product({ data, addToCart }) {
  return (
    <View className="border-[1px] border-[#DFDFDF] rounded-[2px] mb-[14px] p-2 pb-[14px] pt-[14px] flex-row items-center justify-between">
      <View>
        <Text className="font-bold">{data.name}</Text>
        <Text>R$ {data.price}</Text>
      </View>
      <TouchableOpacity
        className="px-3 bg-[#168fff] pt-[6px] pb-[6px] rounded-sm"
        onPress={addToCart}
      >
        <Text className="">+</Text>
      </TouchableOpacity>
    </View>
  );
}
