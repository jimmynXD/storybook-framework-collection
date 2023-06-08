const watch = process.argv[2] === "--watch";

require("esbuild")
  .build({
    entryPoints: ["components/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    sourcemap: true,
    plugins: [require("esbuild-sass-plugin").sassPlugin()],
    watch: watch,
  })
  .catch(() => process.exit(1));
