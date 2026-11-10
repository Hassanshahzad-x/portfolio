import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "Documents go into a searchable index; a question goes to an AI that looks it up in the index and returns an answer.",
  nodes: [
    { id: "docs", x: 30, y: 40, kind: "docs", hue: "blue", label: "Your documents" },
    { id: "index", x: 125, y: 40, kind: "db", hue: "violet", label: "Searchable index" },
    { id: "you", x: 30, y: 130, kind: "person", hue: "cyan", label: "Your question" },
    { id: "ai", x: 205, y: 130, kind: "chip", hue: "orange", label: "AI looks it up" },
    { id: "answer", x: 295, y: 130, kind: "chat", hue: "green", label: "Answer" },
  ],
  links: [["docs", "index"], ["index", "ai"], ["you", "ai"], ["ai", "answer"]],
  steps: [
    { node: "docs", title: "Upload documents", text: "Add your files once. They become a knowledge base you can talk to." },
    { node: "you", title: "Ask in plain words", text: "Type a question the way you would ask a colleague." },
    { node: "answer", title: "Get the answer", text: "It finds the right passage and answers with context, or sums the document up." },
  ],
});
