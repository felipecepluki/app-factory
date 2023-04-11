import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  function handleIncrease() {
    addAmount();
    setAmount((item) => item + 1);
  }

  function handleDecrease() {
    removeAmount();
    if (amount === 0) {
      setAmount(0);
      return;
    }
    setAmount((item) => item - 1);
  }

  return (
    <View className="border-[1px] border-[#DFDFDF] rounded-sm mb-[14px] p-2">
      <View>
        <Text className="font-bold text-lg">{data.name}</Text>
        <Text className="text-base">R$ {data.price}</Text>
      </View>
      <View className="my-[14px] flex-row items-center">
        <TouchableOpacity
          className="p-[6px] bg-[#168fff] px-[14px] rounded-sm"
          onPress={handleDecrease}
        >
          <Text> - </Text>
        </TouchableOpacity>
        <Text className="mx-[14px]">{amount}</Text>
        <TouchableOpacity
          className="p-[6px] bg-[#168fff] px-[14px] rounded-sm"
          onPress={handleIncrease}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
