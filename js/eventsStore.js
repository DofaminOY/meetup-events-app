export const eventsStore = [
  {
    title: "Day Trading Idea and Strategy",
    description: "Day Trading Meetup Group",
    date: new Date(2024, 2, 18, 19),
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 1,
    category: "Business",
    distance: 5,
    section: "near",
  },
  {
    title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
    description: "Business networking event",
    date: new Date(2024, 2, 19, 17),
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 41,
    category: "Business",
    distance: 25,
    section: "near",
  },
  {
    title: "Tech Talks & Quiz: Next-Gen Database Solutions",
    description: "Technology meetup",
    date: new Date(2024, 2, 13, 18),
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    type: "online",
    attendees: 40,
    category: "Technology",
    distance: 0,
    section: "near",
  },
  {
    title: "INFORMS San Francisco Chapter In-Person Event",
    description: "Analytics and operations meetup",
    date: new Date(2024, 2, 28, 17),
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 41,
    category: "Health and Wellbeing",
    distance: 50,
    section: "near",
  },
  {
    title: "AI Wednesdays - Meet and Greet!",
    description: "AI and technology networking",
    date: new Date(2024, 2, 13, 18, 30),
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 29,
    category: "Technology",
    distance: 5,
    section: "near",
  },
  {
    title: "ROS By-The-Bay March 2024",
    description: "Robotics meetup",
    date: new Date(2024, 2, 21, 18),
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 51,
    category: "Social Activities",
    distance: 15,
    section: "near",
  },
  {
    title: "Free Christian Singles' Dinner",
    description: "Community dinner event",
    date: new Date(2024, 2, 29, 18),
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 11,
    category: "Hobbies and Passions",
    distance: 10,
    section: "near",
  },
  {
    title: "In-person: Deep Dive into RAG Architectures",
    description: "Technology discussion group",
    date: new Date(2024, 2, 14, 17),
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    type: "offline",
    attendees: 16,
    category: "Hobbies and Passions",
    distance: 50,
    section: "near",
  },
  {
    title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
    description: "Online business event",
    date: new Date(2024, 2, 14, 18),
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    type: "online",
    attendees: 3,
    category: "Business",
    distance: 25,
    section: "online",
  },
  {
    title: "Vision Pro Developers Online Meetup",
    description: "Online technology meetup",
    date: new Date(2024, 2, 13, 19),
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200&auto=format&fit=crop",
    type: "online",
    attendees: 51,
    category: "Technology",
    distance: 0,
    section: "online",
  },
  {
    title: "Significant Musical Moments",
    description: "Music discussion event",
    date: new Date(2024, 2, 13, 18),
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    type: "online",
    attendees: 16,
    category: "Hobbies and Passions",
    distance: 10,
    section: "online",
  },
  {
    title: "FREE Webinar: Introduction to Power BI",
    description: "Power BI online webinar",
    date: new Date(2024, 2, 14, 17, 30),
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    type: "online",
    attendees: 33,
    category: "Technology",
    distance: 0,
    section: "online",
  },
];

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsStore);
    }, 300);
  });
};

