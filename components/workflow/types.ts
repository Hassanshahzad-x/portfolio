import type { ArtKey } from "./art";

export type Turn = "xmid" | "ymid" | "xy" | "yx";

export type Hue ="lavender" | "blue" | "mint" | "cyan" | "peach" | "coral" | "neutral";

// One stage of a project's workflow. Everything a visitor can read about it lives here.
export type WorkflowNode = {
  id: string;
  title: string;
  art: ArtKey;
  hue: Hue;
  // Cell on the desktop grid, 0-based. Below the breakpoint nodes stack in array order instead.
  col: number;
  row: number;
  // What arrives at this stage.
  input: string;
  how: string;
  // Only what runs at this stage, never the whole project stack. Empty when nothing can be named with confidence.
  tech: string[];
  output?: string;
  // 1 to 3 when this node is one of the plain-words steps under the diagram.
  step?: number;
};

export type Workflow = {
  slug: string;
  // Read by screen readers as the diagram's summary.
  label: string;
  cols: number;
  rows: number;
  nodes: WorkflowNode[];
  // Lines are orthogonal. Default "xmid": across, down at the halfway column, across. "ymid" is the vertical twin
  // (a bus fanning out below a node), "xy" and "yx" turn a single corner.
  links: [from: string, to: string, turn?: Turn][];
  steps: { title: string; text: string }[];
};
