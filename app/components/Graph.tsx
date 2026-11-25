import React, { useEffect, useImperativeHandle, useRef } from "react";

export interface GraphHandle {
	hello: () => void;
}

export interface GraphProps {
	ref: React.Ref<GraphHandle>;
}

function GraphComponent({ ref }: GraphProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useImperativeHandle(
		ref,
		() => ({
			hello() {},
		}),
		[],
	);
	useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    console.log("Canvas initialized");
		return () => {};
	}, []);
	return (
		<>
			<canvas ref={canvasRef} width="800" height="600"></canvas>
		</>
	);
}

export default GraphComponent;
