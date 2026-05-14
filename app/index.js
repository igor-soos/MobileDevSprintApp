import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../src/styles/globalStyles";
import { router } from "expo-router";
import { COLORS } from "../src/styles/colors";

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        WeFord
      </Text>

      <Text style={globalStyles.subtitle}>
        Seu programa de fidelidade Ford
      </Text>

      <View style={{ marginTop: 40 }}>
        <TextInput
          placeholder="E-mail"
          style={globalStyles.input}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={globalStyles.input}
        />

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text style={globalStyles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/register")}
          style={{
            marginTop: 20,
            alignItems: "center",
        }}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "600",
            }}
          >
          Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}