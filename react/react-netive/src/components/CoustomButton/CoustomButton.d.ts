import { ComponentType } from "react";

export interface CoustomButtonProps {
  title: string;
  onPress: () => void;
}

declare const CoustomButton: ComponentType<CoustomButtonProps>;
export default CoustomButton;
