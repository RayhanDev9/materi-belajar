import React, { type JSX } from "react";
import type { nama } from "./Person.types";

interface SayHelloProps {
  nama: nama;
  age?: number;
  isMarried: boolean;
}

export default function SayHello({
  nama,
  age = 0,
  isMarried,
}: SayHelloProps): JSX.Element {
  return (
    <div>{`Hell, perkenalkan nama saya ${nama.frist} ${nama.last}, umur ${age} dan ${isMarried ? "Sudah" : "Blom"} Merried`}</div>
  );
}
