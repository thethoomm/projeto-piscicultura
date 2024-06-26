import {
  CANAL_LIMITE_SENSORES_1,
  CANAL_LIMITE_SENSORES_2,
  CANAL_MANUAL_AUTOMATICO,
  THINGSPEAK_URL,
} from "@/constants/thingspeak";
import { Mode } from "@/enums/mode";
import axios from "axios";
import { Measurement, MeasurementLimits, SensorType } from "@/utils/sensores";
import { useAppNavigation } from "../utils/use-app-navigation";
import { ToggleSensorState } from "../enums/toggle-sensor-state";

export class ThingspeakService {
  private url = THINGSPEAK_URL;
  private delayTime = 20000;

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async sendNewValue(apiKey: string, field: number, value: number) {
    const request = `${this.url}update?api_key=${apiKey}&field${field}=${value}`;
    console.log("entrou no sendNewValue(): ", request);

    try {
      const response = await axios.get(request);
      console.log("Response -> ");
      console.log({ response });
      return (await response).status;
    } catch (error) {
      console.error(`Error sending new value:`, error);
    }
  }

  async setMode(mode: Mode) {
    const value = mode === Mode.AUTOMATIC ? Mode.AUTOMATIC : Mode.MANUAL;
    const request = `${this.url}update?api_key=${CANAL_MANUAL_AUTOMATICO}&field7=${value}`;

    console.log(request);
    await this.delay(this.delayTime);

    try {
      const response = await axios.get(request);
      console.log(`Mode set to ${mode}:`, response.data);
    } catch (error) {
      console.error(`Failed to set mode to ${mode}:`, error);
    }
  }

  async updateSensorValues(data: MeasurementLimits) {
    await this.setMode(Mode.MANUAL);

    for (const key in data) {
      const value = Number(data[key]);

      if (!value) continue;

      // Canal 1
      switch (key) {
        case "temperaturaMax":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 1, value);
          break;
        case "temperaturaMin":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 2, value);
          break;
        case "phMax":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 3, value);
          break;
        case "phMin":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 4, value);
          break;
        case "oxigenioMax":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 5, value);
          break;
        case "oxigenioMin":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 6, value);
          break;
        case "orpMax":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 7, value);
          break;
        case "orpMin":
          this.sendNewValue(CANAL_LIMITE_SENSORES_1, 8, value);
          break;

        // Canal 2
        case "condutividadeMax":
          this.sendNewValue(CANAL_LIMITE_SENSORES_2, 1, value);
          break;
        case "condutividadeMin":
          this.sendNewValue(CANAL_LIMITE_SENSORES_2, 2, value);
          break;
        case "salinidadeMax":
          this.sendNewValue(CANAL_LIMITE_SENSORES_2, 3, value);
          break;
        case "salinidadeMin":
          this.sendNewValue(CANAL_LIMITE_SENSORES_2, 4, value);
          break;
      }
      await this.delay(this.delayTime);
    }
  }

  async toggleSensorState(sensor: SensorType, sensorState: ToggleSensorState) {
    // await this.setMode(Mode.AUTOMATIC);
    
    const url = `${THINGSPEAK_URL}update?api_key=${CANAL_MANUAL_AUTOMATICO}&field${sensor.field}=${sensorState}`
    
    console.log(url)
    
    try {
      await axios.get(url)
    } catch (error) {
      console.warn(error)
    }
    
    await this.delay(this.delayTime);
    console.log('Foi')
  }
}
