// ==========================================================
// events.js
// Every event shown on the "Events" page and homepage.
// Put event photos inside: public/assets/events/
// ==========================================================

const events = [
  {
    id: 1,
    title: "Annual Club Meetup",
    date: "12 November 2026",
    location: "Example Convention Center",
    status: "upcoming", // "upcoming" or "past"
    image: "/assets/events/event-1.jpg",
    description:
      "Our biggest yearly gathering — bikes on display, awards, food, and live music for the whole club.",
    info: "Doors open at 10:00 AM. Free entry for members, guests welcome with registration.",
  },
  {
    id: 2,
    title: "Charity Ride Day",
    date: "23 November 2026",
    location: "Example City Square",
    status: "upcoming",
    image: "/assets/events/event-2.jpg",
    description:
      "A charity ride to raise funds for a local cause. All proceeds go directly to the chosen charity.",
    info: "Registration fee goes 100% to charity. Group photo at the finish line.",
  },
  {
    id: 3,
    title: "Ducati Track Experience",
    date: "5 July 2026",
    location: "Example Circuit",
    status: "past",
    image: "/assets/events/event-3.jpg",
    description:
      "Members enjoyed a full day of guided laps and technical workshops with professional instructors.",
    info: "This event has ended — check the gallery for photos.",
  },
];

export default events;
