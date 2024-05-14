import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useLoading } from "@/contexts/useLoading";

type FormsLayoutProps = {
  title: string
  description: string
  children: React.ReactNode
}

export function FormsLayout(props: FormsLayoutProps) {
  const { message, setMessage } = useLoading()

  function handleCloseAlert() {
    setMessage('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>
          {props.description}
        </Text>
      </View>
      {message && (
        <TouchableOpacity style={styles.alert} onPress={handleCloseAlert}>
          <Text style={styles.alertText}>{message}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        {props.children}
      </View>
    </View>
  );
}