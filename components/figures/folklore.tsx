import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "A grandparent's interview goes into a private memory vault; when family ask a question, AI finds the answer in that vault and replies in the grandparent's own voice.",
  nodes: [
    { id: "elder", x: 30, y: 40, kind: "person", hue: "pink", label: "Grandparent" },
    { id: "interview", x: 100, y: 40, kind: "mic", hue: "orange", label: "Interview" },
    { id: "vault", x: 170, y: 40, kind: "db", hue: "violet", label: "Memory vault" },
    { id: "ai", x: 240, y: 40, kind: "chip", hue: "blue", label: "AI finds answer" },
    { id: "voice", x: 305, y: 40, kind: "speaker", hue: "green", label: "Their voice" },
    { id: "family", x: 240, y: 130, kind: "people", hue: "cyan", label: "Family asks" },
  ],
  links: [["elder", "interview"], ["interview", "vault"], ["vault", "ai"], ["family", "ai"], ["ai", "voice"], ["voice", "family", "yx"]],
  steps: [
    { node: "interview", title: "Record", text: "A loved one sits for one guided interview, 60 to 90 minutes of their own stories." },
    { node: "vault", title: "Keep", text: "Their words become a private archive the family can search just by asking." },
    { node: "family", title: "Ask", text: "Relatives ask questions and hear answers in that person's cloned voice, drawn only from what they said." },
  ],
});
