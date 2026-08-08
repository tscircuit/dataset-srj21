import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { AutoroutingPipelineSolver } from "@tscircuit/capacity-autorouter";
import { getSvgFromGraphicsObject } from "graphics-debug";
import { circuit001 as sample } from "../index.js";

const outputUrl = new URL("../docs/sample.svg", import.meta.url);
const solver = new AutoroutingPipelineSolver(structuredClone(sample));
const svg = getSvgFromGraphicsObject(solver.visualize(), {
	backgroundColor: "#ffffff",
	svgWidth: 1200,
	svgHeight: 800,
}).replace(/[ \\t]+$/gm, "");

await mkdir(dirname(outputUrl.pathname), { recursive: true });
await Bun.write(outputUrl, svg);
console.log(`Wrote ${outputUrl.pathname}`);
