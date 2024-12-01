import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

interface IProduct {
  id: number;
  brand: string;
  name: string;
  description: string;
  thumbnail: string;
  originalPrice: number;
  currentPrice: number;
  updatedAt: string;
}

const productList: IProduct[] = [
  {
    id: 1,
    brand: "나이키",
    name: "에어맥스 97 트리플 화이트",
    description: "클래식한 디자인의 러닝화",
    thumbnail:
      "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    originalPrice: 179000,
    currentPrice: 139000,
    updatedAt: "2024.03.20",
  },
  {
    id: 2,
    brand: "아디다스",
    name: "울트라부스트 라이트",
    description: "편안한 착화감의 데일리 슈즈",
    thumbnail:
      "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    originalPrice: 219000,
    currentPrice: 159000,
    updatedAt: "2024.03.19",
  },
  {
    id: 3,
    brand: "퓨마",
    name: "슈퍼리가 클래식",
    description: "레트로 감성의 스니커즈",
    thumbnail:
      "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    originalPrice: 89000,
    currentPrice: 69000,
    updatedAt: "2024.03.18",
  },
  {
    id: 4,
    brand: "뉴발란스",
    name: "993 메이드 인 USA",
    description: "프리미엄 조거 스니커즈",
    thumbnail:
      "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    originalPrice: 339000,
    currentPrice: 289000,
    updatedAt: "2024.03.17",
  },
  {
    id: 5,
    brand: "반스",
    name: "올드스쿨 클래식",
    description: "시그니처 스케이트 슈즈",
    thumbnail:
      "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    originalPrice: 79000,
    currentPrice: 59000,
    updatedAt: "2024.03.16",
  },
];

export default function Products() {
  // 할인율 계산 함수
  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  // 가격 포맷팅 함수
  const formatPrice = (price: number) => {
    return price.toLocaleString() + "원";
  };

  return (
    <ScrollView>
      {productList.map((product) => (
        <View key={product.id} style={styles.itemContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
          <View style={styles.contentContainer}>
            <Text style={styles.brandName}>{product.brand}</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>
                {formatPrice(product.originalPrice)}
              </Text>
              <Text style={styles.currentPrice}>
                {formatPrice(product.currentPrice)}
              </Text>
              <Text style={styles.discountRate}>
                {calculateDiscount(product.originalPrice, product.currentPrice)}
                %
              </Text>
            </View>
            <Text style={styles.updateDate}>
              가격수정일: {product.updatedAt}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "space-between",
  },
  brandName: {
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: "#999999",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF3B30",
    marginRight: 8,
  },
  discountRate: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF3B30",
  },
  updateDate: {
    fontSize: 12,
    color: "#999999",
  },
});
