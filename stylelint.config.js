/** @type {import('stylelint').Config} */
const config = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true,
    "no-empty-source": null,
    "selector-class-pattern": null,
  },
};

export default config;
