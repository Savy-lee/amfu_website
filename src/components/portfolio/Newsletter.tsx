"use client";
import { FormEvent } from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Section from "./Section";
export default function Newsletter({ onSubmit }: { onSubmit: (event: FormEvent<HTMLFormElement>) => void }) { return <Section id="newsletter" eyebrow="Stay updated" title="A small signal when something new ships."><Box component="form" onSubmit={onSubmit} className="newsletter-form"><TextField label="Your email address" name="email" type="email" required /><Button type="submit" variant="outlined" endIcon={<SendIcon />}>Subscribe</Button></Box></Section>; }
