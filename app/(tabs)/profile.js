import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";

import { useEffect, useState } from "react";
import { COLORS } from "../../src/styles/colors";
import { getData } from "../../src/services/storage";
import { removeData } from "../../src/services/storage";
import { router } from "expo-router";

export default function Profile() {

  const [user, setUser] = useState(null);
  const [offerNotifications, setOfferNotifications] =
    useState(true);
  const [reviewNotifications, setReviewNotifications] =
    useState(true);

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
      }}
    >
      {/* HEADER */}
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {/* AVATAR */}
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: COLORS.primaryDark,
            marginTop: 15,
          }}
        >
          {user?.name || "Usuário"}
        </Text>

        <Text
          style={{
            color: COLORS.textSecondary,
            marginTop: 5,
          }}
        >
          Cliente Gold
        </Text>
      </View>

      {/* DADOS */}
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
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.primaryDark,
            marginBottom: 20,
          }}
        >
          Informações
        </Text>

        <Text style={{ marginBottom: 10 }}>
          📧 {user?.email || "email@ford.com"}
        </Text>

        <Text style={{ marginBottom: 10 }}>
          📱 {user?.phone || "(00) 00000-0000"}
        </Text>

        <Text>
          🚘 VIN: {user?.vin || "Não cadastrado"}
        </Text>
      </View>

      {/* NOTIFICAÇÕES */}
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
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.primaryDark,
            marginBottom: 20,
          }}
        >
          Notificações
        </Text>

        {/* OFERTAS */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Ofertas exclusivas
            </Text>

            <Text
              style={{
                color: COLORS.textSecondary,
                marginTop: 4,
              }}
            >
              Receber promoções da Ford
            </Text>
          </View>

          <Switch
            value={offerNotifications}
            onValueChange={setOfferNotifications}
            trackColor={{
              false: "#ccc",
              true: COLORS.primary,
            }}
          />
        </View>

        {/* REVISÃO */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Revisão programada
            </Text>

            <Text
              style={{
                color: COLORS.textSecondary,
                marginTop: 4,
              }}
            >
              Alertas de revisão e garantia
            </Text>
          </View>

          <Switch
            value={reviewNotifications}
            onValueChange={setReviewNotifications}
            trackColor={{
              false: "#ccc",
              true: COLORS.primary,
            }}
          />
        </View>
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
          onPress={async () => {
            await removeData("user");

            router.replace("/");
          }}
        style={{
          backgroundColor: "#D9534F",
          padding: 16,
          borderRadius: 14,
          marginTop: 30,
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Sair da conta
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}