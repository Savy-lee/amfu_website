import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import type { PortfolioHero } from "../../../lib/actions/portfolio";

export default function Hero({ hero }: { hero: PortfolioHero }) {
  const [firstName, ...rest] = hero.name.split(" ");
  const lastName = rest.length ? ` ${rest.join(" ")}` : "";

  return (
    <Box id="home" className="portfolio-hero">
      <Container maxWidth="lg">
        <Typography variant="overline">PORTFOLIO / 2026</Typography>
        <Typography variant="h1">
          {firstName}
          <br />
          <span>{lastName.trim() || firstName}.</span>
        </Typography>
        <Typography variant="h5">{hero.role}</Typography>
        <Typography className="hero-copy">{hero.tagline}</Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} className="hero-actions">
          <Button variant="contained" color="secondary" href="#projects" endIcon={<ArrowOutwardIcon />}>
            View my work
          </Button>
          <Button variant="outlined" href="#contact">
            Get in touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
