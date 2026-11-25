import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  ...prefix("math", [route("graph-part1", "./routes/Graph-part1.tsx")]),
  index("routes/home.tsx"),
] satisfies RouteConfig;
