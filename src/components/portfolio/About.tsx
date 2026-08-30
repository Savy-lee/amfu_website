import { Box, Button, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Section from "./Section";
import type { PortfolioAbout } from "../../../lib/actions/portfolio";

export default function About({ about }: { about: PortfolioAbout }) {
  return (
    <Section id="about" eyebrow="A little context" title={about.title}>
      <Box className="about-grid">
        <Box component="img" src={about.image} alt={about.intro} className="profile-image" />

        <Box>
          <Typography variant="h3">{about.intro}</Typography>

          <Typography color="text.secondary" className="body-copy">
            {about.description}
          </Typography>

          <Stack spacing={1} className="personal-info">
            {about.personalInfo.map(([label, value]) => (
              <Typography key={label} variant="body2">
                <b>{label}:</b> {value}
              </Typography>
            ))}
          </Stack>

          <Button variant="contained" href={about.cvUrl} download startIcon={<DownloadIcon />}>
            Download CV
          </Button>
        </Box>
      </Box>
    </Section>
  );
}