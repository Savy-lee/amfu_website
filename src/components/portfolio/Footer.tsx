import { Box, Container, Link, Stack, Typography } from "@mui/material";
import type { PortfolioFooter } from "../../../lib/actions/portfolio";

export default function Footer({ footer }: { footer: PortfolioFooter }) {
  return (
    <Box component="footer" className="portfolio-footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "space-between", gap: 2 }}
        >
          <Box>
            <Typography variant="h6">
              {footer.name}
              <span>.</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {footer.subtitle}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {footer.socialLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {footer.copyright}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
