import React from "react";

interface FriendProps {
  friends: {
    frist: string;
    last: string;
  }[];
}

export default function Friends({ friends }: FriendProps) {
  console.info(friends);
  return (
    <div>
      {friends.map((item) => (
        <h2>
          {`Hallo, saya tamnya Rayhan. Pekernalkan nama saya ${item.frist} ${item.last}`}
        </h2>
      ))}
    </div>
  );
}
