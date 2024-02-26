import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import { CardComponent } from "./components/card";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { inputStyles } from "./components/input";
import { sliderStyles } from "./components/slider";
import { textareaStyles } from "./components/textarea";
import { switchStyles } from "./components/switch";
import { linkStyles } from "./components/link";
import { breakpoints } from "./breakpoints";
import { globalStyles } from "./styles";

export default extendTheme(
  {
    breakpoints,
    config: {
      initialColorMode: "dark",
    },
  }, // Breakpoints and default theme
  globalStyles,
  badgeStyles, // badge styles
  buttonStyles, // button styles
  linkStyles, // link styles
  sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  switchStyles, // switch styles
  CardComponent // card component
);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}
