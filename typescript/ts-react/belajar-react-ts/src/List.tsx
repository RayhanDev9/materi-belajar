import React from "react";

interface List<T> {
  items: T[];
  onClick: (value: T) => void;
}

export default function List<T extends string | number>({
  items,
  onClick,
}: List<T>) {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, i) => {
        return (
          <div key={i} onClick={() => onClick(item)}>
            {" "}
            {item}
          </div>
        );
      })}
    </div>
  );
}
