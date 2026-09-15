import React, { useEffect, useRef } from "react";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(function () {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" value={value} ref={inputRef} onChange={onChange} />
    </div>
  );
}
