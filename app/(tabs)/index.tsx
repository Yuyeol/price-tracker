import Products from "@/components/home/products";
import ToolBar from "@/components/home/products/tool-bar";
import { SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar />
      <Products />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
