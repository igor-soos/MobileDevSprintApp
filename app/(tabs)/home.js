import {
  View,
  Text,
  ScrollView,
} from "react-native";

import { globalStyles } from "../../src/styles/globalStyles";
import { COLORS } from "../../src/styles/colors";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.textSecondary,
          }}
        >
          Bem-vindo,
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: COLORS.primaryDark,
            marginTop: 5,
          }}
        >
          Igor
        </Text>

        {/* CARD PONTOS */}
        <View
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 20,
            padding: 20,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Seus pontos
          </Text>

          <Text
            style={{
              color: "#fff",
              fontSize: 42,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            12.450
          </Text>

          <Text
            style={{
              color: "#D6E4FF",
              marginTop: 10,
            }}
          >
            Faltam 2.550 pontos para Gold
          </Text>
        </View>

        {/* PRÓXIMA REVISÃO */}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.primaryDark,
            }}
          >
            Próxima revisão
          </Text>

          <Text
            style={{
              marginTop: 10,
              color: COLORS.textSecondary,
            }}
          >
            Ford Ranger 2024
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 16,
            }}
          >
            Em 1.200 km ou 15 dias
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}