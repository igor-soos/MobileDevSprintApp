import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../../src/styles/colors";
import { globalStyles } from "../../src/styles/globalStyles";

export default function Offers() {
  const offers = [
    {
      title: "Revisão Premium",
      discount: "20% OFF",
      description:
        "Desconto especial na revisão programada do seu Ford.",
    },

    {
      title: "Garantia Estendida",
      discount: "+1 Ano",
      description:
        "Extenda sua garantia com condições exclusivas.",
    },

    {
      title: "Acessórios Ford",
      discount: "15% OFF",
      description:
        "Capotas, multimídia e acessórios originais.",
    },

    {
      title: "Troca de Pneus",
      discount: "10% OFF",
      description:
        "Condição especial para clientes Gold.",
    },
  ];

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
        Ofertas Exclusivas
      </Text>

      <Text style={globalStyles.subtitle}>
        Benefícios disponíveis para seu nível Gold
      </Text>

      {offers.map((offer, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#fff",
            borderRadius: 22,
            padding: 20,
            marginTop: 20,
          }}
        >
          {/* TAG */}
          <View
            style={{
              backgroundColor: "#E8F1FF",
              alignSelf: "flex-start",
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: COLORS.primaryDark,
                fontWeight: "bold",
              }}
            >
              {offer.discount}
            </Text>
          </View>

          {/* TÍTULO */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: COLORS.primaryDark,
              marginTop: 18,
            }}
          >
            {offer.title}
          </Text>

          {/* DESCRIÇÃO */}
          <Text
            style={{
              color: COLORS.textSecondary,
              marginTop: 10,
              lineHeight: 22,
            }}
          >
            {offer.description}
          </Text>

          {/* BOTÃO */}
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 14,
              borderRadius: 12,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Resgatar oferta
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}