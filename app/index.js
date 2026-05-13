import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { globalStyles } from "../src/styles/globalStyles";

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

        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}