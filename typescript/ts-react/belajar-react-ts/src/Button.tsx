import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // Misal tanpa perlu eventnya
  // onClick: () => void;
}
export default function Button({ onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
