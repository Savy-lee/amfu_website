import { FormEvent } from "react";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Section from "./Section";
import type { PortfolioContact } from "../../../lib/actions/portfolio";

export default function Contact({
  contact,
  onSubmit,
}: {
  contact: PortfolioContact;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Section id="contact" eyebrow="Say hello" title="Let&apos;s make something useful.">
      <Box className="contact-grid">
        <Box>
          <Typography color="text.secondary" className="body-copy">
            Open to internship opportunities, collaborations, and conversations about thoughtful technology.
          </Typography>

          <Stack spacing={2}>
            <Typography>
              <b>Email</b>
              <br />
              <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            </Typography>
            <Typography>
              <b>Phone</b>
              <br />
              {contact.phone}
            </Typography>
            <Typography>
              <b>Location</b>
              <br />
              {contact.location}
            </Typography>
          </Stack>
        </Box>

        <Box component="form" onSubmit={onSubmit} className="contact-form">
          <TextField label="Your name" name="name" required />
          <TextField label="Your email" name="email" type="email" required />
          <TextField label="Subject" name="subject" required />
          <TextField label="Your message" name="message" multiline rows={5} required />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send message
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
