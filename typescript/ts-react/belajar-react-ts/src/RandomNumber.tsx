import React from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositif: boolean;
  isNegatif?: never;
  isZero?: never;
};
type NegatifNumber = RandomNumberType & {
  isZero?: never;
  isNegatif: boolean;
  isPositif?: never;
};
type ZeroNumber = RandomNumberType & {
  isPositif?: never;
  isNegatif?: never;
  isZero: boolean;
};
type RandomNumberProps = PositiveNumber | NegatifNumber | ZeroNumber;

export default function RandomNumber({
  value,
  isPositif,
  isNegatif,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositif && "Positif"} {isNegatif && "Negatif"}{" "}
      {isZero && "Zero"}
    </div>
  );
}
