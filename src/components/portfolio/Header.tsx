"use client";
import React, { useState } from "react";
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const links = ["about", "services", "skills", "projects", "journey", "contact"];
export default function Header({ dark, onThemeChange }: { dark: boolean; onThemeChange: () => void }) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  return <AppBar position="sticky" color="inherit" elevation={0} className="portfolio-header"><Toolbar component={Container} maxWidth="lg"><Typography component="a" href="#home" variant="h6" className="portfolio-logo">JRL<span>.</span></Typography><Stack direction="row" spacing={.5} className="desktop-nav">{links.map((link) => <Button key={link} href={`#${link}`} color="inherit">{link}</Button>)}</Stack><Tooltip title="Toggle theme"><IconButton onClick={onThemeChange} color="primary">{dark ? <LightModeIcon /> : <DarkModeIcon />}</IconButton></Tooltip><IconButton className="mobile-nav-button" onClick={(event) => setAnchor(event.currentTarget)} aria-label="Open navigation"><MenuIcon /></IconButton><Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>{links.map((link) => <MenuItem component="a" href={`#${link}`} key={link}>{link}</MenuItem>)}</Menu></Toolbar></AppBar>;
}
