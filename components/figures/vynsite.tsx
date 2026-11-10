import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "Two dealerships pass an access check into one shared platform, which keeps each dealer's cars and leads and suggests cars with AI.",
  nodes: [
    { id: "a", x: 30, y: 40, kind: "house", hue: "blue", label: "Dealer A" },
    { id: "b", x: 30, y: 130, kind: "house", hue: "pink", label: "Dealer B" },
    { id: "access", x: 110, y: 85, kind: "lock", hue: "yellow", label: "Access check" },
    { id: "platform", x: 190, y: 85, kind: "server", hue: "orange", label: "Shared platform" },
    { id: "cars", x: 275, y: 40, kind: "car", hue: "violet", label: "Cars + leads" },
    { id: "ai", x: 275, y: 130, kind: "chip", hue: "green", label: "AI car picks" },
  ],
  links: [["a", "access"], ["b", "access"], ["access", "platform"], ["platform", "cars"], ["platform", "ai"]],
  steps: [
    { node: "a", title: "A space per dealer", text: "Many dealerships share one platform, and none can see another's customers." },
    { node: "access", title: "Keys under control", text: "Roles, two-factor sign-in and an audit trail decide who can open what." },
    { node: "cars", title: "Cars and leads", text: "Inventory, leads, loyalty and referrals in one place, with AI suggesting cars for each customer." },
  ],
});
