import { Box, Paper, Typography } from "@mui/material";
import Section from "./Section";
import { services } from "./data";
export default function Services() { return <Section id="services" eyebrow="What I do" title="Useful work, carefully made."><Box className="services-grid">{services.map(([title, description], index) => <Paper key={title} variant="outlined" className="service-card"><Typography variant="overline" color="secondary.main">0{index + 1}</Typography><Typography variant="h6">{title}</Typography><Typography variant="body2" color="text.secondary">{description}</Typography></Paper>)}</Box></Section>; }
