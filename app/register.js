import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import { globalStyles } from "../src/styles/globalStyles";
import { COLORS } from "../src/styles/colors";

export default function Register() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
      contentContainerStyle={{
        padding: 20,
      }}
    >
      <Text style={globalStyles.title}>
        Criar conta
      </Text>

      <Text style={globalStyles.subtitle}>
        Cadastre-se no programa WeFord Rewards
      </Text>

      <View style={{ marginTop: 30 }}>
        <TextInput
          placeholder="Nome completo"
          style={globalStyles.input}
        />

        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          style={globalStyles.input}
        />

        <TextInput
          placeholder="CPF"
          keyboardType="numeric"
          style={globalStyles.input}
        />

        <TextInput
          placeholder="Telefone"
          keyboardType="phone-pad"
          style={globalStyles.input}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={globalStyles.input}
        />

        <TextInput
          placeholder="Confirmar senha"
          secureTextEntry
          style={globalStyles.input}
        />

        <TouchableOpacity
          style={[
            globalStyles.button,
            {
              marginTop: 10,
            },
          ]}
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text style={globalStyles.buttonText}>
            Criar conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
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
            Já possui conta? Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}