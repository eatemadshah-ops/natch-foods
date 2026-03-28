export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Shah Patel",
    role: "Founder & CEO",
    bio: "With deep expertise in international trade and a passion for quality food, Shah founded Natch Foods to bridge global food markets.",
  },
  {
    name: "Maria Santos",
    role: "Director of Operations",
    bio: "Maria oversees logistics and supply chain management, ensuring seamless delivery across continents.",
  },
  {
    name: "James Chen",
    role: "Head of Quality Assurance",
    bio: "James brings 15 years of food safety experience, maintaining the highest standards across our product lines.",
  },
  {
    name: "Amina Osei",
    role: "Business Development Manager",
    bio: "Amina cultivates partnerships with producers and buyers worldwide, expanding our global network.",
  },
];

export const values = [
  {
    title: "Quality First",
    description:
      "Every product undergoes rigorous quality checks before it reaches our partners.",
  },
  {
    title: "Global Reach",
    description:
      "We connect producers and buyers across 30+ countries, bridging cultures through food.",
  },
  {
    title: "Sustainability",
    description:
      "We prioritize responsible sourcing, eco-friendly packaging, and ethical trade practices.",
  },
  {
    title: "Transparency",
    description:
      "Full traceability from source to shelf. We believe in open, honest partnerships.",
  },
];
