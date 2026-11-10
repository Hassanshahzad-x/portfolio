import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "You make a private link with a timer; a visitor can open it until the timer runs out, then the link expires on its own.",
  nodes: [
    { id: "you", x: 30, y: 40, kind: "person", hue: "cyan", label: "You" },
    { id: "maker", x: 110, y: 40, kind: "server", hue: "orange", label: "Link maker" },
    { id: "timer", x: 190, y: 40, kind: "hourglass", hue: "yellow", label: "Timer" },
    { id: "link", x: 275, y: 40, kind: "link", hue: "blue", label: "Private link" },
    { id: "visitor", x: 275, y: 130, kind: "person", hue: "green", label: "Visitor" },
    { id: "expired", x: 150, y: 130, kind: "lock", hue: "grey", label: "Expired" },
  ],
  links: [["you", "maker"], ["maker", "timer"], ["timer", "link"], ["link", "visitor"], ["timer", "expired", "yx"]],
  steps: [
    { node: "maker", title: "Share a link", text: "Create a private link to a file or page, protected by a token." },
    { node: "timer", title: "Set a timer", text: "Decide how long the link should stay open." },
    { node: "expired", title: "It expires itself", text: "When time runs out the link stops working. Nobody has to remember to revoke it." },
  ],
});
