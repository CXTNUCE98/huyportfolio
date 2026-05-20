import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
  },
  presets: [
    presetAttributify(),
    presetUno(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
