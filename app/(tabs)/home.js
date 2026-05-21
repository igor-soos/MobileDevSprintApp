import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../src/styles/colors";
import { useEffect, useState } from "react";
import { getData } from "../../src/services/storage";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    async function loadUser() {
      const storedUser = await getData("user");

      if (storedUser) {
        setUser(storedUser);
      }
    }

    loadUser();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 120,
      }}
    >
      {/* HEADER */}
      <View>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.textSecondary,
            paddingTop:20,
          }}
        >
          Bem-vindo de volta,
        </Text>

        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: COLORS.primaryDark,
            marginTop: 5,
          }}
        >
          {user?.name || "Cliente"}
        </Text>
      </View>

      {/* CARD PRINCIPAL */}
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: 28,
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
          Pontuação atual
        </Text>
        <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
        <Ionicons
          name="star"
          size={30}
          color="#fff"
          style={{
          marginBottom: 12,
        }}
        />
        
        <Text
          style={{
            color: "#fff",
            fontSize: 44,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          12.450
        </Text>
        </View>
        <Text
          style={{
            color: "#D6E4FF",
            marginTop: 8,
          }}
        >
          Cliente Gold • 70% para Platinum
        </Text>

        {/* PROGRESSO */}
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
      </View>

      {/* VEÍCULO */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 24,
          padding: 20,
          marginTop: 25,
        }}
      >

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="car"
            size={24}
            color="#002060"
          />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.primaryDark,
            marginLeft: 6
          }}
        >
          Ford Ranger 2024
        </Text>
        </View>

        <Text
          style={{
            marginTop: 8,
            color: COLORS.textSecondary,
          }}
        >
          Garantia ativa até 2027
        </Text>

        <Text
          style={{
            marginTop: 4,
            color: COLORS.textSecondary,
          }}
        >
          VIN: 3FTTW8S98RRA12345
        </Text>
      </View>

      {/* REVISÃO */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 24,
          padding: 20,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="build"
            size={24}
            color="#002060"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.primaryDark,
              marginLeft: 8,
            }}
          >
            Próxima revisão
          </Text>
        </View>

        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
          }}
        >
          Em 1.200 km ou 15 dias
        </Text>

        <View
          style={{
            backgroundColor: "#FFF4E5",
            padding: 12,
            borderRadius: 12,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: "#A15C00",
              fontWeight: "600",
            }}
          >
            Faça a revisão no prazo para manter a garantia ativa.
          </Text>
        </View>
      </View>

      {/* OFERTAS RÁPIDAS */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: COLORS.primaryDark,
          marginTop: 30,
          marginBottom: 15,
        }}
      >
        Ofertas rápidas
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* CARD 1 */}
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            width: "48%",
            borderRadius: 20,
            padding: 18,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: COLORS.primaryDark,
            }}
          >
            Revisão
          </Text>

          <Text
            style={{
              marginTop: 8,
              color: COLORS.textSecondary,
            }}
          >
            20% OFF
          </Text>
        </TouchableOpacity>

        {/* CARD 2 */}
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            width: "48%",
            borderRadius: 20,
            padding: 18,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: COLORS.primaryDark,
            }}
          >
            Brindes
          </Text>

          <Text
            style={{
              marginTop: 8,
              color: COLORS.textSecondary,
            }}
          >
            Ofertas Ford
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}