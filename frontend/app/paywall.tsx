import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { api } from "@/src/api/client";
import { usePrefs, setCredits, setIsPro } from "@/src/state/prefs";
import RewardedCreditsCard from "@/src/components/RewardedCreditsCard";
import SubscriptionCard from "@/src/components/SubscriptionCard";
import AppBackButton from "@/src/components/AppBackButton";

export default function Paywall() {
  const prefs = usePrefs();
  const [rewardLoading, setRewardLoading] = React.useState(false);
  const [subLoading, setSubLoading] = React.useState(false);

  const onReward = async () => {
    if (!prefs.userToken) {
      Alert.alert("Login required", "Please sign in first to claim rewards.");
      return;
    }
    try {
      setRewardLoading(true);
      const reward = await api.rewardCredits(prefs.userToken, {
        source: "admob_rewarded",
        ad_unit_id: prefs.admobRewardedAdUnitId || undefined,
        reward_amount: 5,
      });
      await setCredits(reward.credits || 0);
      Alert.alert("Reward granted", `+${reward.awarded} credits added.`);
    } catch (err: any) {
      Alert.alert("Reward failed", err?.message || "Could not grant rewarded credits.");
    } finally {
      setRewardLoading(false);
    }
  };

  const onSubscribe = async () => {
    if (!prefs.userToken || !prefs.playSubscriptionProductId) {
      Alert.alert("Unavailable", "Subscription product is not configured yet.");
      return;
    }
    try {
      setSubLoading(true);
      await api.verifySubscription(prefs.userToken, {
        product_id: prefs.playSubscriptionProductId,
        purchase_token: `manual-${Date.now()}`,
      });
      await setIsPro(true);
      Alert.alert("Pro activated", "Subscription status updated.");
    } catch (err: any) {
      // The backend returns a JSON body ({"detail": "..."}); surface that
      // human-readable message instead of the raw JSON text.
      let message = "Could not activate subscription.";
      try {
        const parsed = JSON.parse(err?.message || "");
        message = parsed?.detail || message;
      } catch {
        message = err?.message || message;
      }
      Alert.alert("Subscriptions coming soon", message);
    } finally {
      setSubLoading(false);
    }
  };

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#F5F1FF", "#FFFFFF"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
        <View style={styles.header}>
          <AppBackButton testID="paywall-back-button" />
        </View>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24, gap: 14 }} showsVerticalScrollIndicator={false}>
          <Text style={styles.headline}>Credits & Premium Access</Text>

          <View style={styles.balanceCard} testID="paywall-balance-card">
            <Text style={styles.balanceSub}>Current balance</Text>
            <Text style={styles.balanceTitle} testID="paywall-credits-text">{prefs.credits} credits</Text>
            {prefs.isPro ? <Text style={styles.proActive}>Pro active · Unlimited usage</Text> : null}
          </View>

          <RewardedCreditsCard loading={rewardLoading} onReward={onReward} testIDPrefix="paywall-rewarded" />

          <SubscriptionCard
            productId={prefs.playSubscriptionProductId}
            loading={subLoading}
            onSubscribe={onSubscribe}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F5F1FF" },
  header: { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8 },
  closeBtn: { width: 38, height: 38, borderRadius: 19, alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" },
  headline: { color: "#1F1A2E", fontSize: 26, fontWeight: "900", textAlign: "left", marginTop: 4 },
  balanceCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F0EAFC",
    backgroundColor: "#FFFFFF",
    padding: 14,
  },
  balanceSub: { color: "#6B6585", fontSize: 12, fontWeight: "600" },
  balanceTitle: { color: "#1F1A2E", fontSize: 24, fontWeight: "900", marginTop: 3 },
  proActive: { color: "#10B981", fontSize: 12, fontWeight: "700", marginTop: 4 },
});
