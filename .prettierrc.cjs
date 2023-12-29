module.exports = {
  $schema: "https://json.schemastore.org/prettierrc",
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  trailingComma: "none",
  plugins: [import('prettier-plugin-tailwindcss')]
}