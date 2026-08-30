"use client";

import { FormEvent, useState } from "react";
import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Journey from "./Journey";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "@/styles/portfolio/global.css";
import "@/styles/portfolio/header.css";
import "@/styles/portfolio/hero.css";
import "@/styles/portfolio/about.css";
import "@/styles/portfolio/services.css";
import "@/styles/portfolio/skills.css";
import "@/styles/portfolio/projects.css";
import "@/styles/portfolio/journey.css";
import "@/styles/portfolio/contact.css";
import "@/styles/portfolio/newsletter.css";
import "@/styles/portfolio/footer.css";
import type { PortfolioData } from "../../../lib/actions/portfolio";

export default function Portfolio({ data }: { data: PortfolioData }) {
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState<"contact" | "newsletter" | null>(null);

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: { main: dark ? "#75d5c7" : "#213b63" },
      secondary: { main: "#ee765c" },
      background: {
        default: dark ? "#101820" : "#f6f4ef",
        paper: dark ? "#18232d" : "#fffdf9",
      },
      text: {
        primary: dark ? "#f5f7fa" : "#1e2a32",
        secondary: dark ? "#b8c7cf" : "#5c6b75",
      },
    },
    typography: {
      fontFamily: "var(--font-geist-sans), sans-serif",
      h1: { fontWeight: 800 },
      h2: { fontWeight: 800 },
      h3: { fontWeight: 700 },
    },
    shape: {
      borderRadius: 3,
    },
  });

  const contactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage("contact");
  };

  const newsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage("newsletter");
  };

  const themeVars = {
    ["--page-bg" as string]: dark ? "#101820" : "#f6f4ef",
    ["--page-text" as string]: dark ? "#f5f7fa" : "#1e2a32",
    ["--page-text-muted" as string]: dark ? "#b8c7cf" : "#5c6b75",
    ["--surface" as string]: dark ? "#18232d" : "#fffdf9",
    ["--surface-alt" as string]: dark ? "#1d2d39" : "#e5f1ed",
    ["--surface-line" as string]: dark ? "rgba(117,213,199,0.2)" : "rgba(24,34,48,0.12)",
    ["--brand" as string]: dark ? "#75d5c7" : "#213b63",
    ["--accent" as string]: "#ee765c",
    ["--hero-bg" as string]: dark ? "#0d1720" : "#213b63",
    ["--shadow-soft" as string]: dark ? "rgba(12,18,24,0.52)" : "rgba(18, 42, 61, 0.12)",
  } as React.CSSProperties;

  return (
    <div style={themeVars}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header dark={dark} onThemeChange={() => setDark((value) => !value)} />

        <main>
          <Hero hero={data.hero} />
          <About about={data.about} />
          <Services items={data.services} />
          <Skills items={data.skills} />
          <Projects items={data.projects} />
          <Journey items={data.journey} />
          <Contact contact={data.contact} onSubmit={contactSubmit} />
          <Newsletter onSubmit={newsletterSubmit} />
        </main>

        <Footer footer={data.footer} />

        <Dialog open={Boolean(message)} onClose={() => setMessage(null)}>
          <DialogTitle>
            {message === "newsletter" ? "You are already subscribed" : "Message received"}
          </DialogTitle>

          <DialogContent>
            {message === "newsletter"
              ? "Thanks for subscribing. You will received project updates and tech insights."
              : "Thanks for reaching out. I will get back to you soon."}
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setMessage(null)}>Close</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}