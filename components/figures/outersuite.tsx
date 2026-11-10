import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "A contractor uploads drawings, the system measures them into an estimate, an estimator checks it, and a proposal goes out.",
  nodes: [
    { id: "contractor", x: 30, y: 40, kind: "person", hue: "orange", label: "Contractor" },
    { id: "drawings", x: 100, y: 40, kind: "docs", hue: "blue", label: "Drawings" },
    { id: "measure", x: 170, y: 40, kind: "chip", hue: "violet", label: "Auto-measure" },
    { id: "estimate", x: 240, y: 40, kind: "chart", hue: "green", label: "Estimate" },
    { id: "estimator", x: 240, y: 130, kind: "person", hue: "yellow", label: "Estimator" },
    { id: "proposal", x: 305, y: 130, kind: "mail", hue: "cyan", label: "Proposal" },
  ],
  links: [["contractor", "drawings"], ["drawings", "measure"], ["measure", "estimate"], ["estimate", "estimator"], ["estimator", "proposal"]],
  steps: [
    { node: "drawings", title: "Upload the drawings", text: "A contractor drops in the plan set for a bid. On a real job that was 34 sheets." },
    { node: "measure", title: "Measured for you", text: "The system measures rooms and counts fixtures, and shows where every number came from." },
    { node: "estimator", title: "Estimator signs off", text: "The estimator checks only the uncertain lines, then sends a priced proposal." },
  ],
});
