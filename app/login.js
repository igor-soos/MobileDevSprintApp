import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        Ford Loyalty
      </Text>

      <TextInput
        placeholder="E-mail"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 20,
          borderRadius: 8,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#003478",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}