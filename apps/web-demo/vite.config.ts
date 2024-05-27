import react from "@vitejs/plugin-react-swc";

import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";

import tamaguiConfig from "./tamagui.config";

export default {
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig.themeConfig),
    process.env.NODE_ENV === "production"
      ? tamaguiExtractPlugin(tamaguiConfig.themeConfig)
      : null,
  ].filter(Boolean),
};
