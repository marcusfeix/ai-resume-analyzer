import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/resume/:id", "routes/resume.$id.tsx"),
  route('/upload', 'routes/upload.tsx'),
] satisfies RouteConfig;
