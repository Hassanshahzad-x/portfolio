import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "Flight schools work in one platform, where an AI scheduler plans training and sends email and calendar invites, and records feed payments.",
  nodes: [
    { id: "a", x: 30, y: 40, kind: "plane", hue: "blue", label: "Flight schools" },
    { id: "b", x: 30, y: 130, kind: "person", hue: "cyan", label: "" },
    { id: "platform", x: 110, y: 85, kind: "server", hue: "orange", label: "One platform" },
    { id: "ai", x: 190, y: 40, kind: "chip", hue: "violet", label: "AI scheduler" },
    { id: "records", x: 190, y: 130, kind: "docs", hue: "green", label: "Records" },
    { id: "mail", x: 275, y: 40, kind: "calendar", hue: "pink", label: "Email + calendar" },
    { id: "pay", x: 275, y: 130, kind: "card", hue: "yellow", label: "Payments" },
  ],
  links: [["a", "platform"], ["b", "platform"], ["platform", "ai"], ["platform", "records"], ["ai", "mail"], ["records", "pay"]],
  steps: [
    { node: "a", title: "Flight schools", text: "Several training organizations run their day-to-day on one platform." },
    { node: "ai", title: "Schedule fills itself", text: "Claude helps build the training schedule and draft documents." },
    { node: "records", title: "Paperwork handled", text: "Records, FAA data, email, calendars and Stripe Connect payments sit in the same place." },
  ],
});
