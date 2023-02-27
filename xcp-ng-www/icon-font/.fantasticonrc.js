module.exports = {
  inputDir: "./icons", // (required)
  outputDir: "./build", // (required)
  fontTypes: ["ttf", "woff2", "svg"], // "eot", "ttf", "woff",
  assetTypes: ["scss", "json", "html"], //['ts', 'css', 'json', 'html'],
  fontsUrl: "",
  normalize: true,
  selector: ".icon",
  prefix: "icon",
  tag: "",
  formatOptions: {
    json: {
      indent: 2,
    },
    ts: {
      types: ["constant", "literalId"],
      singleQuotes: true,
    },
  },
  templates: {
    scss: "./templates/icons.scss.template.hbs",
    css: "./templates/icons.scss.template.hbs",
    html: "./templates/icons.html.template.hbs",
  },
  getIconId: ({
    basename, // `string` - Example: 'foo';
    relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
    absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
    relativeFilePath, // `string` - Example: 'foo.svg'
    index, // `number` - Example: `0`
  }) => [basename].join("_"), // '0_foo'
};
