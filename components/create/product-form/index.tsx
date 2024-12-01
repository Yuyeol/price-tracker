import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import FormInput from "@/components/create/product-form/form-input";

export default function ProductForm() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<IProductForm>({
    defaultValues: {
      brandName: "",
      productName: "",
      description: "",
      link: "",
    },
  });

  const onSubmit = async (data: IProductForm) => {
    try {
      console.log(data);
      // TODO: API 호출 구현
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.linkContainer}>
        <FormInput
          control={control}
          name="link"
          placeholder="상품 링크"
          rules={{ required: "상품 링크는 필수입니다" }}
        />
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => console.log("링크 확인")}
        >
          <Text style={styles.checkButtonText}>등록</Text>
        </TouchableOpacity>
      </View>

      <FormInput
        control={control}
        name="brandName"
        placeholder="브랜드"
        rules={{ required: "브랜드는 필수입니다" }}
      />

      <FormInput
        control={control}
        name="productName"
        placeholder="상품명"
        rules={{ required: "상품명은 필수입니다" }}
      />

      <FormInput
        control={control}
        name="description"
        placeholder="설명"
        rules={{ required: "설명은 필수입니다" }}
        multiline
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitButtonText}>저장하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    padding: 16,
    gap: 16,
  },
  linkContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    width: "100%",
  },
  checkButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    minWidth: 60,
    alignItems: "center",
  },
  checkButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  priceBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f8f8f8",
  },
  priceText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
