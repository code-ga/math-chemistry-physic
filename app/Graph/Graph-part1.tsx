import { useRef } from "react";
import GraphComponent, { type GraphHandle } from "../components/Graph";
import "./Graph-part1.css";

export function GraphPart1Page() {
	const ref = useRef<GraphHandle>(null);
	return (
		<div className="main-container">
			<div className="mb-4 text-center p-1.5">
				<div className="mb-4">
					<h1 className="text-3xl font-bold mb-4">
						Introduction: How Browsers Draw Graphs
					</h1>
					<p className="text-lg text-gray-700 dark:text-gray-200 text-left">
						In this chapter we will introduce simplest—though least
						efficient—approach that still gets the job done.. In the next
						chapter, if time permits. we will introduce (implement) other way to
						draw graph that utilizes the GPU behind the scenes to handle the
						rendering.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-bold mb-2">Table of Contents</h2>
					<ol></ol>
				</div>
				{/* Content block one: how to draw in browser */}
				<div className="text-left">
					<h3>1. How to draw something in browser</h3>
					<p>
						Although there are many ways to draw in a browser, we will use the
						HTML5 canvas element. The canvas element is a rectangular area on a
						web page that can be used to draw graphics using JavaScript. It
						provides a way to render 2D shapes, images, and text directly in the
						browser without relying on external plugins or libraries. Also this
						will boost your render time because because browsers use native
						graphics libraries written in C/C++, which are heavily optimized to
						achieve highest performance for graphic job
					</p>
					<p>
						You might ask: "Why not just use an {"<img>"} tag or building the
						raw html content. so this is very simple we need to allow user to
						interact with graph and we also want to avoid overloading the DOM.
						The browser's main thread and DOM rendering engine already have
						heavy lifting to do, so we shouldn't bog them down
					</p>
					{/* We need the white canvas heres to tell human that we have example */}
				</div>
				<div className="text-left">
					<h3>2. What are functions and graphs?</h3>
					<p>
						In most math curriculums, a function is defined as function is the
						one rule that we take the one number from this Set (for example is
						A) then the function will give us another value in set B. like this:
						"f: A{"->"}B".
					</p>
					<p>
						So, When we plot these input-output pairs (x, y) onto a coordinate
						system we will have the graph. and that how computer plot your
						graph, they don't care whether a line is straight or curved. their
						just take as much point as you cannot able to distinguge so many
						points close together that your eyes can't tell them apart you will
						have the graph of that function
					</p>
					<p>
						fact: but graph can be circle but function cannot be that because By
						definition, a function maps each input (x) to only one output (y).
						With a circle, a single x value corresponds to two different y
						values. We need to considering this at the end of post if the post
						don't tell about this ai assistant try to notice me about this
					</p>
					{/* We hand-on with the one input that allow user can input their function */}
				</div>
			</div>

			<div className="graph-container">
				<GraphComponent ref={ref}></GraphComponent>
			</div>
		</div>
	);
}
