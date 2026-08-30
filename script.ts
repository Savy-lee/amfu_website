import { prisma } from "./lib/prisma";

async function main() {
  const user = await prisma.users.upsert({
    where: { email: "admin@portfolio.local" },
    update: {},
    create: {
      name: "Jhon Rey Labanon",
      email: "admin@portfolio.local",
      password: "passwordkoito123",
      role: "admin",
    },
  });

  const projectCount = await prisma.projects.count({ where: { users_id: user.id } });
  if (projectCount === 0) {
    await prisma.projects.createMany({
      data: [
        {
          title: "Barangay Documentation Processing System",
          category: "system",
          categoryLabel: "Systems",
          meta: "Self-directed project | Current",
          description:
            "A web application to modernize and digitize manual barangay processes such as permit issuance and record tracking.",
          image: "/portfolio/images/projects/barangay-system.png",
          tags: ["React", "Node.js", "Express", "Nodemailer", "MySQL2", "Tailwind CSS"],
          users_id: user.id,
        },
        {
          title: "2D Adventure Game",
          category: "design",
          categoryLabel: "Design",
          meta: "Game development course project | December 2025",
          description:
            "A 2D game designed and developed from concept to completion, with character controls and level design.",
          image: "/portfolio/images/projects/game-project.png",
          tags: ["HTML5", "CSS3", "JavaScript", "Three.js", "Node.js", "Electron"],
          users_id: user.id,
        },
        {
          title: "Local Government Transparency Portal",
          category: "web",
          categoryLabel: "Web development",
          meta: "DBMS course project | November 2025",
          description:
            "A public-facing portal that presents barangay projects and activities through clear information architecture and accessible design.",
          image: "/portfolio/images/projects/transparency-portal.png",
          tags: ["HTML5", "CSS3", "PHP", "Node.js"],
          users_id: user.id,
        },
        {
          title: "Tourism Vacation Planner System",
          category: "web",
          categoryLabel: "Web development",
          meta: "Integrative programming project | November 2024",
          description:
            "A collaborative itinerary planner that strengthened skills in team coding, project management, and practical system design.",
          image: "/portfolio/images/projects/compass-planner.png",
          tags: ["HTML5", "CSS3", "PHP", "Node.js"],
          users_id: user.id,
        },
      ],
    });
  }

  const skillCount = await prisma.skillGroups.count({ where: { users_id: user.id } });
  if (skillCount === 0) {
    await prisma.skillGroups.createMany({
      data: [
        {
          title: "Development",
          items: [
            ["JavaScript & React", 45],
            ["PHP & MySQL", 60],
            ["Node.js & Express", 40],
          ],
          users_id: user.id,
        },
        {
          title: "Design & Content",
          items: [
            ["UI/UX Design", 60],
            ["Graphic Design (PubMat)", 65],
            ["Technical Documentation", 70],
          ],
          users_id: user.id,
        },
      ],
    });
  }

  const serviceCount = await prisma.services.count({ where: { users_id: user.id } });
  if (serviceCount === 0) {
    await prisma.services.createMany({
      data: [
        {
          title: "Web Development",
          description: "Web applications built with modern technologies like React and Node.js.",
          users_id: user.id,
        },
        {
          title: "Responsive Design",
          description: "Interfaces that feel clear and useful on every device.",
          users_id: user.id,
        },
        {
          title: "Database Solutions",
          description: "Efficient database design and management for your applications.",
          users_id: user.id,
        },
        {
          title: "UI/UX Design",
          description: "User-centered design that enhances usability and engagement.",
          users_id: user.id,
        },
        {
          title: "Technical Documentation",
          description: "Clear documentation for projects, systems, and teams.",
          users_id: user.id,
        },
        {
          title: "System Integration",
          description: "Connecting different systems to work seamlessly together.",
          users_id: user.id,
        },
      ],
    });
  }

  const journeyCount = await prisma.journeyEntrys.count({ where: { users_id: user.id } });
  if (journeyCount === 0) {
    await prisma.journeyEntrys.createMany({
      data: [
        {
          period: "2023 - Present",
          title: "BS Information Technology",
          description: "Rizal Technological University, focused on web development and system analysis.",
          users_id: user.id,
        },
        {
          period: "2025",
          title: "Capstone Project Development",
          description: "Started a self-directed Barangay Management System using full-stack development skills.",
          users_id: user.id,
        },
        {
          period: "2025",
          title: "Academic Projects Completion",
          description: "Completed a Transparency Portal and 2D Game as course requirements.",
          users_id: user.id,
        },
        {
          period: "2026 (Upcoming)",
          title: "Internship Target",
          description: "Seeking an IT internship to gain professional experience and contribute to real-world projects.",
          users_id: user.id,
        },
      ],
    });
  }

  const aboutCount = await prisma.aboutSections.count({ where: { users_id: user.id } });
  if (aboutCount === 0) {
    await prisma.aboutSections.createMany({
      data: [
        {
          name: "About",
          description:
            "I am a developer focused on building practical digital solutions for real-world problems. I enjoy system design, user experience, and turning ideas into functional interfaces.",
          users_id: user.id,
        },
      ],
    });
  }

  const newsletterCount = await prisma.newsletterSubscribers.count({ where: { users_id: user.id } });
  if (newsletterCount === 0) {
    await prisma.newsletterSubscribers.createMany({
      data: [
        {
          email: "hello@portfolio.local",
          users_id: user.id,
        },
      ],
    });
  }

  const footerCount = await prisma.footerInfos.count({ where: { users_id: user.id } });
  if (footerCount === 0) {
    await prisma.footerInfos.createMany({
      data: [
        {
          name: "JRL DEV",
          description: "Building practical digital experiences with purpose.",
          users_id: user.id,
        },
      ],
    });
  }

  console.log("Seed complete");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });