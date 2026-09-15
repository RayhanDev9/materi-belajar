import React, { useEffect, useRef } from "react";

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(function () {
    inputRef.current?.focus();
  }, []);

  return <div>DomRef</div>;
}
