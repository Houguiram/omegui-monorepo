import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";
import { omeguiThemeGenerator } from "omegui-theme-generator";

const tamaguiConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    ...omeguiThemeGenerator({
      light: "nord",
      dark: "dracula",
    }),
  },
});

export default tamaguiConfig;

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}
