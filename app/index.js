import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";
import { globalStyles } from "../src/styles/globalStyles";
import { COLORS } from "../src/styles/colors";
import { getData } from "../src/services/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <View style={{ marginTop: 40 }}></View>
      <Text style={globalStyles.titleIndex}>
        WeFord
      </Text>

      <Text style={globalStyles.subtitleIndex}>
        Seu programa de fidelidade Ford
      </Text>

      <Image
  source={require("../assets/icon.png")}
  style={{
    width: 220,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  }}
/>

      <View style={{ marginTop: 5 }}>

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={globalStyles.input}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={globalStyles.input}
        />

        <TouchableOpacity
          style={globalStyles.button}
          onPress={async () => {

            const user = await getData("user");

            if (
              user &&
              user.email === email &&
              user.password === password
            ) {
              router.push("/(tabs)/home");
            } else {
              alert("E-mail ou senha inválidos");
            }
          }}
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