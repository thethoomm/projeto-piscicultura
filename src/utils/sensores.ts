import { CANAL_LIMITE_SENSORES_1, CANAL_LIMITE_SENSORES_2 } from "../constants/thingspeak";

export type MeasurementLimits = {
  condutividadeMax: string;
  condutividadeMin: string;
  orpMax: string;
  orpMin: string;
  oxigenioMax: string;
  oxigenioMin: string;
  phMax: string;
  phMin: string;
  salinidadeMax: string;
  salinidadeMin: string;
  temperaturaMax: string;
  temperaturaMin: string;
  [key: string]: string;
};

export type Measurement = {
  condutividade: string;
  orp: string;
  oxigenio: string;
  ph: string;
  salinidade: string;
  temperatura: string;
  [key: string]: string;
};

export type SensorType = {
  name: string;
  measure: string;
  max: string;
  min: string;
  field: number;
  fieldMax: number;
  fieldMin: number;
  apiKey: string,
};

export const sensores = [
  {
    name: "temperatura",
    measure: "ºC",
    max: "temperaturaMax",
    min: "temperaturaMin",
    field: 1,
    fieldMax: 1,
    fieldMin: 2,
    apiKey: CANAL_LIMITE_SENSORES_1,
  },
  {
    name: "oxigenio",
    measure: "Mg/L",
    max: "oxigenioMax",
    min: "oxigenioMin",
    field: 3,
    fieldMax: 5,
    fieldMin: 6,
    apiKey: CANAL_LIMITE_SENSORES_1,
  },
  {
    name: "ph",
    measure: "pH",
    max: "phMax",
    min: "phMin",
    field: 2,
    fieldMax: 3,
    fieldMin: 4,
    apiKey: CANAL_LIMITE_SENSORES_1,
  },
  {
    name: "salinidade",
    measure: "ppt",
    max: "salinidadeMax",
    min: "salinidadeMin",
    field: 6,
    fieldMax: 3,
    fieldMin: 4,
    apiKey: CANAL_LIMITE_SENSORES_2,
  },
  {
    name: "condutividade",
    measure: "uS/L",
    max: "condutividadeMax",
    min: "condutividadeMin",
    field: 5,
    fieldMax: 1,
    fieldMin: 2,
    apiKey: CANAL_LIMITE_SENSORES_2,
  },
  {
    name: "orp",
    measure: "mV",
    max: "orpMax",
    min: "orpMin",
    field: 4,
    fieldMax: 7,
    fieldMin: 8,
    apiKey: CANAL_LIMITE_SENSORES_1,
  },
];
