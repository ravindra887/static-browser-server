import esbuild from "esbuild";
import pathUtils from "path";
import fs from "fs";

const DEMO_OUT_DIR = pathUtils.join(__dirname, "./demo-build");
fs.mkdirSync(DEMO_OUT_DIR, { recursive: true });

async function bundleDemoCode(): Promise<void> {
  const entry = pathUtils.join(__dirname, "./demo/main.ts");

  const result = await esbuild.build({
    write: false,
    bundle: true,
    minify: false,
    sourcemap: false,
    platform: "browser",
    format: "iife",
    outdir: DEMO_OUT_DIR,
    entryPoints: [entry],
  });

  const text = result.outputFiles[0].text;
  const fullPath = pathUtils.join(DEMO_OUT_DIR, "main.js");
  fs.writeFileSync(fullPath, text, "utf-8");
}

async function run() {
  await bundleDemoCode();

  fs.copyFileSync(
    pathUtils.join(__dirname, "demo/index.html"),
    pathUtils.join(__dirname, "demo-build/index.html")
  );
}

run().catch(console.error);
