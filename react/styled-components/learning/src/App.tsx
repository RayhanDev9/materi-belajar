import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Section from "./components/Section/Section";
import Button, { FancyButton, SubmitButton } from "./components/Button/Button";
import { AnimateLogo } from "./components/animation/animation.style";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: {
    font: "Segeo UI",
  },
};

const GlobalStyle = createGlobalStyle`
    /* font-family:  "Roboto"; */
    button {
      font-family:  ${({ theme }) => theme.fontFamily.font};
      font-size: 1px;
    }
`;
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
        <AnimateLogo aria-hidden="true">
          <use href="/icons.svg#github-icon" />
        </AnimateLogo>
        <br />
        <Button
          $variant="outline"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>

        <FancyButton>Fancy Button</FancyButton>

        <SubmitButton type="submit"> Simpan</SubmitButton>
      </Section>
    </ThemeProvider>
  );
}
