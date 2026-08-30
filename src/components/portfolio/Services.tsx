import { Box, Paper, Typography } from "@mui/material";
import Section from "./Section";
import type { PortfolioService } from "../../../lib/actions/portfolio";

export default function Services({ items }: { items: PortfolioService[] }) {
  return (
    <Section id="services" eyebrow="What I do" title="Useful work, carefully made.">
      <Box className="services-grid">
        {items.map(([title, description], index) => (
          <Paper key={`${title}-${index}`} variant="outlined" className="service-card">
            <Typography variant="overline" color="secondary.main">
              0{index + 1}
            </Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}
