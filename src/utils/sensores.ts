export type Measurement  = {
  condutividadeMax: string
  condutividadeMin: string
  orpMax: string
  orpMin: string
  oxigenioMax: string
  oxigenioMin: string
  phMax: string
  phMin: string
  salinidadeMax: string
  salinidadeMin: string
  temperaturaMax: string
  temperaturaMin: string
  [key: string]: string
}

export const sensores = [
  {
    name: "temperatura",
    measure: 'ºC',
    max: "temperaturaMax",
    min: "temperaturaMin",
  },
  {
    name: "oxigenio",
    measure: 'Mg/L',
    max: "oxigenioMax",
    min: "oxigenioMin",
  },
  {
    name: "ph",
    measure: 'pH',
    max: "phMax",
    min: "phMin",
  },
  {
    name: "salinidade",
    measure: 'ppt',
    max: "salinidadeMax",
    min: "salinidadeMin",
  },
  {
    name: "condutividade",
    measure: 'uS/L',
    max: "condutividadeMax",
    min: "condutividadeMin",
  },
  {
    name: "orp",
    measure: 'mV',
    max: "orpMax",
    min: "orpMin",
  },
];
