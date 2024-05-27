import react from "@vitejs/plugin-react-swc";

import { tamaguiPlugin } from "@tamagui/vite-plugin";

// import tamaguiConfig from "./tamagui.config";

export default {
  plugins: [
    react(),
    tamaguiPlugin({
      config: "tamagui.config.ts",
      components: ["tamagui"],
    }),
    // process.env.NODE_ENV === "production"
    //   ? tamaguiExtractPlugin(tamaguiConfig.themeConfig)
    //   : null,
  ].filter(Boolean),
};
