import type { IconComponentsProps } from "./IconButton";

export function CheckIcon({ size, color }: IconComponentsProps) {
  return <span style={{ fontSize: size, color }}>✓</span>;
}

export function TrashIcon({ size, color }: IconComponentsProps) {
  return <span style={{ fontSize: size, color }}>🗑</span>;
}
