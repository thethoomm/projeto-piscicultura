import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type FormsLayoutProps = {
  title: string
  description: string
  children: React.ReactNode
}

export function FormsLayout(props: FormsLayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>
          {props.description}
        </Text>
      </View>
      <View style={styles.content}>
        {props.children}
      </View>
    </View>
  );
}