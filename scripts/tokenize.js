// Export the variables declared in a Sass partial as JSON, so Jekyll can
// read them from _data and render them in the documentation.
//
// Usage: node scripts/tokenize.js _sass/_variables.scss > _data/variables.json
"use strict";

const path = require("path");
const sass = require("sass");

const file = process.argv[2];

if (!file) {
  console.error("Usage: node scripts/tokenize.js <path/to/_partial.scss>");
  process.exit(1);
}

// "_sass/_variables.scss" is loaded as the module named "variables".
const moduleName = path.basename(file, path.extname(file)).replace(/^_/, "");
const variables = {};

sass.compileString(
  `@use "sass:meta";
   @use "${moduleName}";
   @each $name, $value in meta.module-variables("${moduleName}") {
     $collected: collect($name, meta.inspect($value));
   }`,
  {
    loadPaths: [path.dirname(file)],
    functions: {
      "collect($name, $value)": (args) => {
        const name = args[0].assertString("name").text;
        const value = args[1].assertString("value").text;
        variables[`$${name}`] = value;
        return sass.sassNull;
      },
    },
  },
);

process.stdout.write(`${JSON.stringify(variables, null, 2)}\n`);
