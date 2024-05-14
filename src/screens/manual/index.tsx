import React from 'react'
import { FormsLayout } from '@/components/forms-layout';
import { ManualForm } from '@/components/manual-form';

export default function ManualScreen() {
  const title = "Modo Manual";
  const description =
    "No modo automático você pode desligar/ligar cada sensor.";

  return (
    <FormsLayout title={title} description={description}>
      <ManualForm />
    </FormsLayout>
  );
}