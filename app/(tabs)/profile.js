import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

import { COLORS } from "../../src/styles/colors";
import { globalStyles } from "../../src/styles/globalStyles";

export default function Profile() {
  const [offerNotifications, setOfferNotifications] =
    useState(true);

  const [reviewNotifications, setReviewNotifications] =
    useState(true);

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
            I
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
          Igor
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
          📧 igor@email.com
        </Text>

        <Text style={{ marginBottom: 10 }}>
          📱 (11) 99999-9999
        </Text>

        <Text>
          🚘 Ford Ranger 2024
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