import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "A piece of text goes to an AI reader, which returns five results: sentiment, tone, emotion, a summary and the names it found.",
  nodes: [
    { id: "text", x: 30, y: 40, kind: "docs", hue: "cyan", label: "Your text" },
    { id: "ai", x: 110, y: 40, kind: "chip", hue: "orange", label: "AI reads it" },
    { id: "sentiment", x: 55, y: 130, kind: "chart", hue: "green", label: "Sentiment" },
    { id: "tone", x: 125, y: 130, kind: "chart", hue: "blue", label: "Tone" },
    { id: "emotion", x: 195, y: 130, kind: "chart", hue: "pink", label: "Emotion" },
    { id: "summary", x: 265, y: 130, kind: "docs", hue: "violet", label: "Summary" },
    { id: "names", x: 335, y: 130, kind: "chart", hue: "yellow", label: "Names" },
  ],
  links: [["text", "ai"], ["ai", "sentiment"], ["ai", "tone"], ["ai", "emotion"], ["ai", "summary"], ["ai", "names"]],
  steps: [
    { node: "text", title: "Paste any text", text: "An email, a review, an article: drop it in." },
    { node: "ai", title: "AI reads it", text: "It works out sentiment, tone and emotion, and picks out names and key entities." },
    { node: "summary", title: "Clear results", text: "A short summary and readings at a glance. 120+ people used it in its first month." },
  ],
});
