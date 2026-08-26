export type ProjectCategory = "web" | "system" | "design";

export type Project = {
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  meta: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  { title: "Barangay Documentation Processing System", category: "system", categoryLabel: "Systems", meta: "Self-directed project | Current", description: "A web application to modernize and digitize manual barangay processes such as permit issuance and record tracking, applying system analysis, database design, and UX to a real-world problem.", image: "/portfolio/images/projects/barangay-system.png", tags: ["React", "Node.js", "Express", "Nodemailer", "MySQL2", "Tailwind CSS"] },
  { title: "2D Adventure Game", category: "design", categoryLabel: "Design", meta: "Game development course project | December 2025", description: "A 2D game designed and developed from concept to completion, with character controls, core gameplay mechanics, and level design.", image: "/portfolio/images/projects/game-project.png", tags: ["HTML5", "CSS3", "JavaScript", "Three.js", "Node.js", "Electron"] },
  { title: "Local Government Transparency Portal", category: "web", categoryLabel: "Web development", meta: "DBMS course project | November 2025", description: "A public-facing portal that presents barangay projects and activities through clear information architecture and accessible design.", image: "/portfolio/images/projects/transparency-portal.png", tags: ["HTML5", "CSS3", "PHP", "Node.js"] },
  { title: "Tourism Vacation Planner System", category: "web", categoryLabel: "Web development", meta: "Integrative programming project | November 2024", description: "A collaborative itinerary planner that strengthened skills in team coding, project management, and practical system design.", image: "/portfolio/images/projects/compass-planner.png", tags: ["HTML5", "CSS3", "PHP", "Node.js"] },
];

export const skills = [
  { title: "Development", items: [["JavaScript & React", 45], ["PHP & MySQL", 60], ["Node.js & Express", 40]] },
  { title: "Design & Content", items: [["UI/UX Design", 60], ["Graphic Design (PubMat)", 65], ["Technical Documentation", 70]] },
] as const;

export const services = [
  ["Web Development", "Web applications built with modern technologies like React and Node.js."],
  ["Responsive Design", "Interfaces that feel clear and useful on every device."],
  ["Database Solutions", "Efficient database design and management for your applications."],
  ["UI/UX Design", "User-centered design that enhances usability and engagement."],
  ["Technical Documentation", "Clear documentation for projects, systems, and teams."],
  ["System Integration", "Connecting different systems to work seamlessly together."],
] as const;

export const journey = [
  ["2023 - Present", "BS Information Technology", "Rizal Technological University, focused on web development and system analysis."],
  ["2025", "Capstone Project Development", "Started a self-directed Barangay Management System using full-stack development skills."],
  ["2025", "Academic Projects Completion", "Completed a Transparency Portal and 2D Game as course requirements."],
  ["2026 (Upcoming)", "Internship Target", "Seeking an IT internship to gain professional experience and contribute to real-world projects."],
] as const;
