import { Controller } from "react-hook-form";
import { TextInput, Text, StyleSheet } from "react-native";

interface IProps {
  control: any;
  name: keyof IProductForm;
  placeholder: string;
  rules?: object;
  multiline?: boolean;
}

export default function FormInput({
  control,
  name,
  placeholder,
  rules,
  multiline,
}: IProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <TextInput
            style={[
              styles.input,
              error && styles.errorInput,
              name === "link" && styles.linkInput,
            ]}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </>
      )}
    />
  );
}

// 필요없는건 제거해줘
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  linkInput: {
    flex: 1,
  },
});
