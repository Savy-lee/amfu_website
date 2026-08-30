import { prisma } from "../prisma";

export const PORTFOLIO_ADMIN_EMAIL = "labanonjhonrey@gmail.com";

export type PortfolioProject = {
  title: string;
  category: "web" | "system" | "design";
  categoryLabel: string;
  meta: string;
  description: string;
  image: string;
  tags: string[];
};

export type PortfolioSkill = {
  title: string;
  items: Array<[string, number]>;
};

export type PortfolioService = [string, string];
export type PortfolioJourney = [string, string, string];

export type PortfolioHero = {
  name: string;
  role: string;
  tagline: string;
};

export type PortfolioAbout = {
  title: string;
  image: string;
  intro: string;
  description: string;
  personalInfo: Array<[string, string]>;
  cvUrl: string;
};

export type PortfolioContact = {
  email: string;
  phone: string;
  location: string;
};

export type PortfolioFooter = {
  name: string;
  subtitle: string;
  socialLinks: Array<{ label: string; href: string }>;
  copyright: string;
};

export type PortfolioData = {
  projects: PortfolioProject[];
  skills: PortfolioSkill[];
  services: PortfolioService[];
  journey: PortfolioJourney[];
  hero: PortfolioHero;
  about: PortfolioAbout;
  contact: PortfolioContact;
  footer: PortfolioFooter;
};

function normalizeProjectTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag)).filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeSkillItems(items: unknown): Array<[string, number]> {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.flatMap((item) => {
    if (!Array.isArray(item) || item.length < 2) {
      return [];
    }

    const [label, value] = item as [unknown, unknown];
    const numericValue = Number(value);

    return [[String(label), Number.isFinite(numericValue) ? numericValue : 0] as [string, number]];
  });
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const user = await prisma.users.findUnique({
    where: { email: PORTFOLIO_ADMIN_EMAIL },
  });

  if (!user) {
    const backupAdmin = await prisma.users.findFirst({
      where: { role: "admin" },
      orderBy: { id: "asc" },
    });

    if (!backupAdmin) {
      throw new Error("Portfolio admin user is missing from the database.");
    }

    throw new Error(
      `Canonical admin email not found. Expected ${PORTFOLIO_ADMIN_EMAIL} but found ${backupAdmin.email}. Run the seed script to normalize the admin user.`
    );
  }

  const [projects, skillGroups, services, journeyEntries, aboutSection, footerInfo] = await Promise.all([
    prisma.projects.findMany({
      where: { users_id: user.id },
      orderBy: { id: "asc" },
    }),
    prisma.skillGroups.findMany({
      where: { users_id: user.id },
      orderBy: { id: "asc" },
    }),
    prisma.services.findMany({
      where: { users_id: user.id },
      orderBy: { id: "asc" },
    }),
    prisma.journeyEntrys.findMany({
      where: { users_id: user.id },
      orderBy: { id: "asc" },
    }),
    prisma.aboutSections.findFirst({
      where: { users_id: user.id },
      orderBy: { id: "asc" },
    }),
    prisma.footerInfos.findFirst({
      where: { users_id: user.id },
      orderBy: { id: "asc" },
    }),
  ]);

  if (!projects.length || !skillGroups.length || !services.length || !journeyEntries.length) {
    throw new Error(
      "Portfolio data is missing from the database. Populate Projects, SkillGroups, Services, and JourneyEntrys before loading the portfolio."
    );
  }

  const normalizedProjects: PortfolioProject[] = projects.map((project) => ({
    title: project.title,
    category: (project.category as "web" | "system" | "design") || "web",
    categoryLabel: project.categoryLabel,
    meta: project.meta,
    description: project.description,
    image: project.image,
    tags: normalizeProjectTags(project.tags),
  }));

  const normalizedSkills: PortfolioSkill[] = skillGroups.map((group) => ({
    title: group.title,
    items: normalizeSkillItems(group.items),
  }));

  const normalizedServices: PortfolioService[] = services.map((service) => [
    service.title,
    service.description,
  ]);

  const normalizedJourney: PortfolioJourney[] = journeyEntries.map((entry) => [
    entry.period,
    entry.title,
    entry.description,
  ]);

  const profileName = user.name || "Jhon Rey Labanon";
  const firstName = profileName.split(" ")[0] || "Jhon Rey";

  const normalizedAbout: PortfolioAbout = {
    title: "Technology should feel human.",
    image: "/portfolio/images/LABANON_ID_PHOTO.png",
    intro: `Hello, I'm ${firstName}.`,
    description:
      aboutSection?.description ??
      "I am a developer focused on building practical digital solutions for real-world problems. I enjoy system design, user experience, and turning ideas into functional interfaces.",
    personalInfo: [
      ["Location", "Paranaque City, Metro Manila"],
      ["Education", "BS Information Technology, Rizal Technological University"],
      ["Status", "Available for Internship (January 2026)"],
    ],
    cvUrl: "/portfolio/files/CV_LABANON_JHON_REY_D.pdf",
  };

  const normalizedFooter: PortfolioFooter = {
    name: footerInfo?.name ?? profileName,
    subtitle: footerInfo?.description ?? "IT student & web developer",
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jhon-rey-labanon-39aa653a6/" },
      { label: "GitHub", href: "https://github.com/Savy-lee" },
      { label: "Facebook", href: "https://www.facebook.com/jhonrey.labanon.7" },
      { label: "Twitter", href: "#contact" },
    ],
    copyright: `© 2026 ${profileName}`,
  };

  return {
    projects: normalizedProjects,
    skills: normalizedSkills,
    services: normalizedServices,
    journey: normalizedJourney,
    hero: {
      name: profileName,
      role: "IT student & web developer",
      tagline: "Building practical digital tools for people, communities, and the curious minds who use them.",
    },
    about: normalizedAbout,
    contact: {
      email: user.email,
      phone: "+63 977 089 4350",
      location: "Paranaque City, Metro Manila",
    },
    footer: normalizedFooter,
  };
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const { projects } = await getPortfolioData();
  return projects;
}

export async function getPortfolioSkills(): Promise<PortfolioSkill[]> {
  const { skills } = await getPortfolioData();
  return skills;
}

export async function getPortfolioServices(): Promise<PortfolioService[]> {
  const { services } = await getPortfolioData();
  return services;
}

export async function getPortfolioJourney(): Promise<PortfolioJourney[]> {
  const { journey } = await getPortfolioData();
  return journey;
}

export default getPortfolioData;