import { ProductContext } from "@/features/products/context/ProductContext";
import { Product } from "@/features/products/types/products.types";
import React, { useContext, useState } from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductList() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Something went wrong");
  }

  const { products } = context;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item: { id: any }) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => openModal(item)} />
        )}
      />
      <ProductModal
        visible={modalVisible}
        product={selectedProduct}
        onClose={closeModal}
      />
    </View>
  );
}
