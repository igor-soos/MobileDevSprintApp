import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";
import { saveData } from "../src/services/storage";
import { globalStyles } from "../src/styles/globalStyles";
import { COLORS } from "../src/styles/colors";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vin, setVin] = useState("");
  const [password, setPassword] = useState("");

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
          value={name}
          onChangeText={setName}
          style={globalStyles.input}
        />

        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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
          value={phone}
          onChangeText={setPhone}
          style={globalStyles.input}
        />

        <TextInput
          placeholder="VIN do veículo"
          value={vin}
          onChangeText={setVin}
          style={globalStyles.input}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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
          onPress={async () => {

            const user = {
              name,
              email,
              phone,
              vin,
              password,
            };

            await saveData("user", user);

            router.push("/(tabs)/home");
          }}
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