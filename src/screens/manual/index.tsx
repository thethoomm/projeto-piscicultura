import React from 'react'
import { FormsLayout } from '@/components/forms-layout';
import { ManualForm } from '@/components/manual-form';

export default function ManualScreen() {
  const title = "Modo Manual";
  const description =
    "No modo manual você pode alterar os valores máximos e mínimos de cada sensor.";

  return (
    <FormsLayout title={title} description={description}>
      <ManualForm />
    </FormsLayout>
  );
}