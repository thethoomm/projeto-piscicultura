import { sensores, SensorType } from "@/utils/sensores";
import { Text, View } from "react-native";
import { styles } from "./style";
import { ControlledSwitch } from "@/components/controlled-switch";
import { Control, FieldValues } from "react-hook-form";
import { Button } from "../button";
import { ToggleSensorState } from "../../enums/toggle-sensor-state";
import axios from "axios";
import {
  CANAL_MANUAL_AUTOMATICO,
  THINGSPEAK_URL,
} from "../../constants/thingspeak";
import { ThingspeakService } from "../../services/thingspeak";
import { useEffect, useState } from "react";
import { Mode } from "../../enums/mode";
import { useAppNavigation } from "../../utils/use-app-navigation";
import { useLoading } from "../../contexts/useLoading";

export function RenderButtonList() {
  const { isLoading, setLoading } = useLoading()

  const thingspeakService = new ThingspeakService()
  const navigation = useAppNavigation();

  useEffect(() => {
    thingspeakService.setMode(Mode.MANUAL)
  }, [])

  useEffect(() => {
    console.log('ue: ', isLoading);
    if (isLoading) {
      navigation.navigate("uploading");
    }
  }, [isLoading])

  async function handleSendToThingspeak(sensor: SensorType, value: ToggleSensorState) {
    setLoading(true)
    console.log('ola: ', isLoading)
    thingspeakService.toggleSensorState(sensor, value).then(() => setLoading(false))
  }

  return sensores.map((sensor) => (
    <View key={sensor.name} style={styles.formGroup}>
      <Text style={styles.label}>{sensor.name.toUpperCase()}</Text>
      {/* <ControlledSwitch control={control} name={sensor.name} /> */}
      <View style={styles.buttonBox}>
        <Button
          color="#16a34a"
          text={`${sensor.name.toUpperCase()} ligar`}
          disabled={isLoading}
          onPress={() => handleSendToThingspeak(sensor, ToggleSensorState.ON)}
          />
        <Button
          color="#ef4444"
          text={`${sensor.name.toUpperCase()} desligar`}
          disabled={isLoading}
          onPress={() => handleSendToThingspeak(sensor, ToggleSensorState.OFF)}
        />
      </View>
    </View>
  ));
}
