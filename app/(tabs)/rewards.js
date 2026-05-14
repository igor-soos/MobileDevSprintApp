import {
  View,
  Text,
  ScrollView,
} from "react-native";

import { COLORS } from "../../src/styles/colors";
import { globalStyles } from "../../src/styles/globalStyles";

export default function Rewards() {
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
        WeFord Rewards
      </Text>

      <Text style={globalStyles.subtitle}>
        Seu nível de fidelidade atual
      </Text>

      {/* CARD NÍVEL */}
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: 25,
          padding: 25,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#D6E4FF",
            fontSize: 16,
          }}
        >
          Nível atual
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Gold
        </Text>

        <Text
          style={{
            color: "#D6E4FF",
            marginTop: 10,
          }}
        >
          12.450 pontos acumulados
        </Text>

        {/* BARRA PROGRESSO */}
        <View
          style={{
            height: 10,
            backgroundColor: "#1E4D9B",
            borderRadius: 10,
            marginTop: 20,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          />
        </View>

        <Text
          style={{
            color: "#D6E4FF",
            marginTop: 10,
          }}
        >
          70% para Platinum
        </Text>
      </View>

      {/* BENEFÍCIOS */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: COLORS.primaryDark,
          marginTop: 35,
          marginBottom: 15,
        }}
      >
        Benefícios desbloqueados
      </Text>

      {[
        "10% desconto em revisões",
        "Garantia estendida",
        "Ofertas exclusivas Ford",
        "Prioridade em atendimento",
      ].map((benefit, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#fff",
            padding: 18,
            borderRadius: 15,
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.textPrimary,
            }}
          >
            {benefit}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}