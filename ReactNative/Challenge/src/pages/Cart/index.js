import { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import CardItem from "../../components/CardItem";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <View className="flex-1 bg-[#FAFAFA] pl-[14px] py-[14px]">
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <Text className="font-bold text-lg mb-6">Total: R$ {total}</Text>
        )}
      />
    </View>
  );
}
