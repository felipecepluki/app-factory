import { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Coca Cola",
      price: 19.9,
    },
    {
      id: "2",
      name: "Chocolate",
      price: 6.5,
    },
    {
      id: "3",
      name: "Queijo 500g",
      price: 15,
    },
    {
      id: "4",
      name: "Batata frita",
      price: 23.9,
    },
    {
      id: "5",
      name: "Lata Guarana",
      price: 6.0,
    },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA] px-[14px]">
      <View className="flex-row justify-between items-center mt-6 mb-6">
        <Text className="text-2xl font-bold">Lista de produtos</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          {cart.length >= 1 && (
            <View className="items-center justify-center bg-red-500 w-5 h-5 rounded-[12px] absolute z-[99] bottom-0.5 left-1">
              <Text className="text-[11px]">{cart?.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        className=""
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </SafeAreaView>
  );
}
