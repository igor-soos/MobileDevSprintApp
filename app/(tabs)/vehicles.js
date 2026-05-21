import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";
import { COLORS } from "../../src/styles/colors";
import { globalStyles } from "../../src/styles/globalStyles";

export default function Vehicles() {
  const [vin, setVin] = useState("");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop:20,
      }}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 120,
      }}
    >
      <Text style={globalStyles.title}>
        Meus Veículos
      </Text>

      <Text style={globalStyles.subtitle}>
        Cadastre seu Ford utilizando o VIN
      </Text>

      {/* INPUT VIN */}
      <View style={{ marginTop: 30 }}>
        <TextInput
          placeholder="Digite o VIN"
          value={vin}
          onChangeText={setVin}
          style={globalStyles.input}
        />

        <TouchableOpacity
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>
            Adicionar veículo
          </Text>
        </TouchableOpacity>
      </View>

      {/* CARD VEÍCULO */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.primaryDark,
          }}
        >
          Ford Ranger
        </Text>

        <Text
          style={{
            marginTop: 10,
            color: COLORS.textSecondary,
          }}
        >
          Ano: 2024
        </Text>

        <Text
          style={{
            marginTop: 5,
            color: COLORS.textSecondary,
          }}
        >
          VIN: 3FTTW8S98RRA12345
        </Text>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "#E8F1FF",
            padding: 12,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.primaryDark,
              fontWeight: "600",
            }}
          >
            Garantia ativa até 2027
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}