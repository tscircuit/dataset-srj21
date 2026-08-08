import { AutoroutingPipelineSolver } from "@tscircuit/capacity-autorouter";
import { getSvgFromGraphicsObject } from "graphics-debug";
import { useMemo } from "react";
import { circuit001 as sample } from "../index.js";

export default function SampleFixture() {
	const svg = useMemo(() => {
		const solver = new AutoroutingPipelineSolver(structuredClone(sample));
		return getSvgFromGraphicsObject(solver.visualize(), {
			backgroundColor: "#ffffff",
			svgWidth: 1200,
			svgHeight: 800,
		});
	}, []);

	return (
		<main style={{ fontFamily: "system-ui", padding: 24 }}>
			<h1>SRJ21 · Easy topology-pair circuit001</h1>
			<p>
				{sample.obstacles.length} obstacles · {sample.connections.length}{" "}
				connections
			</p>
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: This SVG is generated locally from checked-in SRJ data. */}
			<div dangerouslySetInnerHTML={{ __html: svg }} />
		</main>
	);
}
