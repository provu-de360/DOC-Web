// ==========================================================
// siteData.js
// General site content: nav menu, hero text, stats, etc.
// Edit the text here and it updates everywhere on the site.
// ==========================================================

export const navLinks = [
  { name: "HOME", path: "/" },
  { name: "MEMBERSHIP", path: "/membership" },
  { name: "UPCOMING RIDES", path: "/rides" },
  { name: "EVENTS", path: "/events" },
  { name: "SPONSORS", path: "/sponsors" },
  { name: "MANAGEMENT", path: "/management" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CLUB RULES", path: "/club-rules" },
];

export const hero = {
  title1: "DUCATI OFFICIAL CLUB",
  title2: "RIDE TOGETHER.",
  title3: "LIVE DUCATI.",
  description:
    "A community built around Ducati motorcycles, memorable rides and shared experiences.",
  image: "/assets/hero.jpg",
};

export const about = {
  title: "ABOUT THE CLUB",
  text: "Ducati Official Club brings together riders who share one passion: the pure emotion of riding a Ducati. From weekend mountain roads to national meetups, we ride as one club, one family, one red heartbeat.",
  image: "/assets/about.jpg",
};

// NOTE: These numbers are PLACEHOLDERS ONLY.
// Replace them with your club's real statistics.
export const stats = [
  { value: 100, suffix: "+", label: "MEMBERS" },
  { value: 25, suffix: "+", label: "RIDES" },
  { value: 15, suffix: "+", label: "EVENTS" },
  { value: 10, suffix: "+", label: "YEARS" },
];

export const contactInfo = {
  email: "info@ducatiofficialclub.example",
  phone: "+1 (555) 123-4567",
  location: "Example City, Example Country",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export const clubRules = [
  {
    title: "Membership Rules",
    content:
      "Members must own or ride a Ducati motorcycle, respect fellow members, and keep membership dues up to date. Placeholder text — replace with your real club rules.",
  },
  {
    title: "Group Ride Rules",
    content:
      "Riders must follow the designated ride leader, maintain safe distances, and respect the planned route. Placeholder text — replace with your real club rules.",
  },
  {
    title: "Safety Guidelines",
    content:
      "Full protective gear is mandatory on every ride. Helmets, jackets, gloves and boots are required at all times. Placeholder text — replace with your real club rules.",
  },
  {
    title: "Code of Conduct",
    content:
      "Members are expected to represent the club with respect, honesty and sportsmanship both on and off the road. Placeholder text — replace with your real club rules.",
  },
  {
    title: "Event Rules",
    content:
      "All members attending club events must register in advance and follow event staff instructions. Placeholder text — replace with your real club rules.",
  },
  {
    title: "Social Media Guidelines",
    content:
      "When posting about the club online, members should keep content respectful and avoid sharing other members' personal information. Placeholder text — replace with your real club rules.",
  },
  {
    title: "Disciplinary Guidelines",
    content:
      "Violations of club rules may result in a warning, suspension, or removal from the club depending on severity. Placeholder text — replace with your real club rules.",
  },
];
