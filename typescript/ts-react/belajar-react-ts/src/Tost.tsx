type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

type ToastProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center-center"> | "center";
};

export default function Toast({ position }: ToastProps) {
  return <div>{position}</div>;
}
