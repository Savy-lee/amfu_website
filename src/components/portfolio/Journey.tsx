import { Box, Typography } from "@mui/material";
import Section from "./Section";
import type { PortfolioJourney } from "../../../lib/actions/portfolio";

export default function Journey({ items }: { items: PortfolioJourney[] }) {
  return (
    <Box id="journey" className="journey-band">
      <Section eyebrow="The long view" title="A journey still in motion.">
        <Box className="timeline">
          {items.map(([date, title, description], index) => (
            <Box key={`${title}-${date}-${index}`} className="timeline-item">
              <Typography variant="overline">{date}</Typography>
              <Typography variant="h5">{title}</Typography>
              <Typography>{description}</Typography>
            </Box>
          ))}
        </Box>
      </Section>
    </Box>
  );
}
