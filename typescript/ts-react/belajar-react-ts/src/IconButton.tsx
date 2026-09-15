import React from "react";

export interface IconComponentsProps {
  size: number;
  color: string;
}

interface IconButtonProps {
  label: string;
  icon: React.ComponentType<IconComponentsProps>;
  onClick: () => void;
}

export default function IconButton({
  label,
  icon: Icon,
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        cursor: "pointer",
      }}
    >
      {/* Komponen pembungkus yang menyuntikkan data ukuran & warna */}
      <Icon size={16} color="blue" />
      <span>{label}</span>
    </button>
  );
}
