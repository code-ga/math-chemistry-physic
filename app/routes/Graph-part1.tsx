import type { Route } from "./+types/home";
import { GraphPart1Page } from "../Graph/Graph-part1";

export function meta({}: Route.MetaArgs) {
  return [
			{ title: "Math Chemistry Physics Project" },
			{ name: "description", content: "Basically how computer (browser) draw math graph" },
		];
}

export default function GraphPart1() {
  return <GraphPart1Page />;
}
