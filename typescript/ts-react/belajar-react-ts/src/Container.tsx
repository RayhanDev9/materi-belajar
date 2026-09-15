import React, { type CSSProperties } from "react";

interface Props {
  styles: React.CSSProperties;
}

export default function Container({ styles }: Props) {
  return <div style={styles}>Container</div>;
}
