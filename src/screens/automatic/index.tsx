import React from "react";
import { FormsLayout } from "@/components/forms-layout";
import { AutomaticForm } from "@/components/automatic-form";

export default function AutomaticScreen() {
  const title = "Modo Automático";
  const description =
    "No modo automático você pode desligar/ligar cada sensor.";

  return (
    <FormsLayout title={title} description={description}>
      <AutomaticForm />
    </FormsLayout>
  );
}
