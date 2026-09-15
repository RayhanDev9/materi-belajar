import React from "react";
import SayHello from "./sayHello";

export default function CustomHook(
  props: React.ComponentProps<typeof SayHello>,
) {
  return <div>{props.nama.frist}</div>;
}
