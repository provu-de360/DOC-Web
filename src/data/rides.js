// ==========================================================
// rides.js
// Every ride shown on the "Upcoming Rides" page and homepage.
// To add a ride: copy one object below, change the values,
// and give it a new unique "id".
// Put ride photos inside: public/assets/rides/
// ==========================================================

const rides = [
  {
    id: 1,
    title: "Weekend Mountain Ride",
    date: "20 September 2026",
    location: "Example Mountain Pass",
    distance: "180 km",
    status: "upcoming", // "upcoming" or "completed"
    image: "/assets/rides/ride-1.jpg",
    description:
      "A scenic weekend ride through winding mountain roads, ending with a group lunch.",
    meetingPoint: "Club Headquarters, Main Square",
    meetingTime: "08:00 AM",
    startTime: "08:30 AM",
    route:
      "We depart from the club HQ, follow the coastal road north, then climb through the mountain pass before looping back through the valley.",
    safety:
      "Full protective gear required. Please ensure your motorcycle has passed a basic safety check before the ride.",
    whatToBring: ["Helmet & full gear", "Valid license & documents", "Water", "Phone charger / power bank"],
  },
  {
    id: 2,
    title: "Coastal Sunrise Ride",
    date: "4 October 2026",
    location: "Example Coastal Highway",
    distance: "120 km",
    status: "upcoming",
    image: "/assets/rides/ride-2.jpg",
    description:
      "An early morning ride along the coast to catch the sunrise, followed by breakfast together.",
    meetingPoint: "Beachside Parking Lot",
    meetingTime: "05:15 AM",
    startTime: "05:30 AM",
    route:
      "A flat, fast coastal route with several scenic stops for photos along the way.",
    safety:
      "Low visibility at start time — reflective gear strongly recommended.",
    whatToBring: ["Helmet & full gear", "Reflective vest", "Camera"],
  },
  {
    id: 3,
    title: "Night City Cruise",
    date: "18 October 2026",
    location: "Example City Center",
    distance: "60 km",
    status: "upcoming",
    image: "/assets/rides/ride-3.jpg",
    description:
      "A relaxed evening cruise through the city, ending at a local café for the club to socialize.",
    meetingPoint: "Club Headquarters",
    meetingTime: "07:00 PM",
    startTime: "07:30 PM",
    route: "A slow-paced loop through the city's main avenues and riverside road.",
    safety: "Ride in formation, maintain safe following distance in traffic.",
    whatToBring: ["Helmet & full gear", "Reflective gear"],
  },
  {
    id: 4,
    title: "Summer Track Day",
    date: "2 August 2026",
    location: "Example Circuit",
    distance: "N/A",
    status: "completed",
    image: "/assets/rides/ride-4.jpg",
    description:
      "A full day at the track for members to push their Ducatis in a safe, controlled environment.",
    meetingPoint: "Circuit Paddock",
    meetingTime: "07:00 AM",
    startTime: "08:00 AM",
    route: "Full circuit laps organized by skill group.",
    safety: "Certified track gear mandatory. Track marshals will brief all riders.",
    whatToBring: ["Full leather suit", "Track-certified helmet", "Boots & gloves"],
  },
];

export default rides;
