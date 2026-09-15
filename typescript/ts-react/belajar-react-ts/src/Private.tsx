import React from "react";

// 1. Definisikan tipe props yang dibutuhkan oleh komponen tujuan

export interface ProfileProps {
  name: string;
}

// 2. Definisikan tipe untuk komponen pembungkusnya

interface PrivateProps {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
}

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Rayhan" />;
  } else {
    return <p>Silahkan Login Terlebih Dahulu</p>;
  }
}
