import { Box, Container, Typography } from "@mui/material";

type SectionProps = { id?: string; eyebrow: string; title: string; children: React.ReactNode };

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return <Box component="section" id={id} className="portfolio-section"><Container maxWidth="lg"><Typography variant="overline" color="secondary.main" className="section-eyebrow">{eyebrow}</Typography><Typography variant="h2" className="section-title">{title}</Typography>{children}</Container></Box>;
}
