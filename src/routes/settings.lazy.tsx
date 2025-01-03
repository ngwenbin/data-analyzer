import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Settings</div>;
}
