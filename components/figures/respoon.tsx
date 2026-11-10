import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "A neighbour with spare food posts it on a nearby map, another neighbour chats to arrange pickup, and the meal is saved from waste.",
  nodes: [
    { id: "giver", x: 30, y: 40, kind: "person", hue: "orange", label: "Has spare food" },
    { id: "map", x: 120, y: 40, kind: "map", hue: "green", label: "Nearby map" },
    { id: "chat", x: 210, y: 40, kind: "chat", hue: "blue", label: "Chat" },
    { id: "taker", x: 300, y: 40, kind: "person", hue: "cyan", label: "Picks it up" },
    { id: "meal", x: 210, y: 130, kind: "bowl", hue: "pink", label: "Meal saved" },
  ],
  links: [["giver", "map"], ["map", "chat"], ["chat", "taker"], ["taker", "meal", "yx"]],
  steps: [
    { node: "map", title: "Find food nearby", text: "Neighbours share spare food, and a map shows what is close to you." },
    { node: "chat", title: "Chat to arrange", text: "Message in real time to agree on a pickup." },
    { node: "meal", title: "Share the meal", text: "The food goes to someone nearby instead of going to waste." },
  ],
});
