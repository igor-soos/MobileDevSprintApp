import {
  View,
  Text,
  ScrollView,
} from "react-native";

import { COLORS } from "../../src/styles/colors";
import { globalStyles } from "../../src/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";

export default function Rewards() {
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
              <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
        <Ionicons
          name="card-outline"
          size={35}
          color="#fff"
          style={{
          marginBottom: 6,
        }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft:3
          }}
        >
          Gold
        </Text>
        </View>

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
      <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
        <Ionicons
          name="bag-check"
          size={22}
          color="#002060"
          style={{
          marginBottom: 18,
        }}
        />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: COLORS.primaryDark,
          marginTop: 35,
          marginBottom: 15,
          marginLeft: 3
        }}
      >
        Benefícios desbloqueados
      </Text>
      </View>

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