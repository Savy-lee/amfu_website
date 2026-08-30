import { Box, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import Section from "./Section";
import type { PortfolioSkill } from "../../../lib/actions/portfolio";

export default function Skills({ items }: { items: PortfolioSkill[] }) {
  return (
    <Box id="skills" className="skills-band">
      <Section eyebrow="Tools of the trade" title="Skills with room to grow.">
        <Box className="skills-grid">
          {items.map((skill, skillIndex) => (
            <Paper key={`${skill.title}-${skillIndex}`} className="skill-card">
              <Typography variant="h6">{skill.title}</Typography>

              <Stack spacing={3}>
                {skill.items.map(([name, value], itemIndex) => (
                  <Box key={`${skill.title}-${name}-${itemIndex}`}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body2">{name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value}%
                      </Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={value} color="secondary" />
                  </Box>
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Section>
    </Box>
  );
}
