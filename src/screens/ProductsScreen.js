import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
//const navigation = useNavigation();

  const dispatch = useDispatch();
const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selected products
            dispatch(productsSlice.actions.setSelectedProduct(item.id))

            navigation.navigate('Product Details')
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.Image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  Image: {
    width: "100%",
    aspectRatio: 1,
  },
});
export default ProductsScreen;