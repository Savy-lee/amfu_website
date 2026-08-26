"use client";

import { FormEvent, useState } from "react";
import { Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, createTheme } from "@mui/material";
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

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState<"contact" | "newsletter" | null>(null);
  const theme = createTheme({ palette: { mode: dark ? "dark" : "light", primary: { main: dark ? "#75d5c7" : "#213b63" }, secondary: { main: "#ee765c" }, background: { default: dark ? "#101820" : "#f6f4ef", paper: dark ? "#18232d" : "#fffdf9" } }, typography: { fontFamily: "var(--font-geist-sans), sans-serif", h1: { fontWeight: 800 }, h2: { fontWeight: 800 }, h3: { fontWeight: 700 } }, shape: { borderRadius: 3 } });
  const contactSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); event.currentTarget.reset(); setMessage("contact"); };
  const newsletterSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); event.currentTarget.reset(); setMessage("newsletter"); };
  return <ThemeProvider theme={theme}><CssBaseline /><Header dark={dark} onThemeChange={() => setDark(!dark)} /><main><Hero /><About /><Services /><Skills /><Projects /><Journey /><Contact onSubmit={contactSubmit} /><Newsletter onSubmit={newsletterSubmit} /></main><Footer /><Dialog open={Boolean(message)} onClose={() => setMessage(null)}><DialogTitle>{message === "newsletter" ? "You&apos;re subscribed" : "Message received"}</DialogTitle><DialogContent>{message === "newsletter" ? "Thanks for subscribing. You&apos;ll receive project updates and tech insights." : "Thanks for reaching out. I&apos;ll get back to you soon."}</DialogContent><DialogActions><Button onClick={() => setMessage(null)}>Close</Button></DialogActions></Dialog></ThemeProvider>;
}