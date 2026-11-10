import { flow } from "./flow";

export const { Art, label, steps } = flow({
  label: "Bookings from several booking sites wait in a queue, land in one shared calendar, and flow on to payments and the host.",
  nodes: [
    { id: "s1", x: 30, y: 25, kind: "screen", hue: "blue", label: "" },
    { id: "s2", x: 30, y: 85, kind: "screen", hue: "blue", label: "" },
    { id: "s3", x: 30, y: 145, kind: "screen", hue: "blue", label: "Booking sites" },
    { id: "queue", x: 110, y: 85, kind: "queue", hue: "yellow", label: "Queue" },
    { id: "calendar", x: 190, y: 85, kind: "calendar", hue: "orange", label: "One calendar" },
    { id: "pay", x: 275, y: 40, kind: "card", hue: "green", label: "Payments" },
    { id: "host", x: 275, y: 130, kind: "house", hue: "cyan", label: "Host" },
  ],
  links: [["s1", "queue"], ["s2", "queue"], ["s3", "queue"], ["queue", "calendar"], ["calendar", "pay"], ["calendar", "host"]],
  steps: [
    { node: "s3", title: "Bookings come in", text: "Hosts list on several channels. Bookings arrive from four channel managers at once." },
    { node: "calendar", title: "One calendar", text: "Every booking lands in one reservation system, so all channels stay in step." },
    { node: "pay", title: "Guests pay", text: "Card payments, refunds and payouts are handled and reconciled through Stripe." },
  ],
});
