import styled from "styled-components";

interface ButtonProps {
  $variant?: "outline" | "solid";
}

export interface DarkButtonProps {
  dark: {
    primary: string;
    text: string;
  };
  light: {
    primary: string;
    text: string;
  };
}

export const Button = styled.button<ButtonProps>`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 999px;
  background: ${({ $variant }) =>
    $variant === "outline" ? "green" : "purple"};
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(124, 58, 237, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(236, 72, 153, 0.4);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(124, 58, 237, 0.3);
  }
`;

export const FancyButton = styled(Button)`
  background-image: linear-gradient(to right, #fff 0%, #f342f3 100%);
  border: none;
`;

export const SubmitButton = styled(Button).attrs({
  type: "submit",
})`
  box-shadow: 0 9px 24px rgba(124, 58, 237, 0.35);

  &:active {
    background: ${({ $variant }) =>
      $variant === "outline" ? "darkgreen" : "rebeccapurple"};
  }
`;

export const DarkButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.dark.primary};
`;
