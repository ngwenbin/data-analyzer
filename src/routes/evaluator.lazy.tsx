import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/evaluator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Evaluator</div>;
}
