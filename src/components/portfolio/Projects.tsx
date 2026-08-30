"use client";

import { useState } from "react";
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import Section from "./Section";
import type { PortfolioProject } from "../../../lib/actions/portfolio";

export type ProjectCategory = "web" | "system" | "design";

export default function Projects({ items }: { items: PortfolioProject[] }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const visible =
    filter === "all"
      ? items
      : items.filter((project) => project.category === filter);

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects that solve something.">
      <Stack direction="row" spacing={1} className="project-filters">
        {[ ["all", "All"], ["web", "Web development"], ["system", "Systems"], ["design", "Design"] ].map(
          ([value, label]) => (
            <Button
              key={String(value)}
              onClick={() => setFilter(value as "all" | ProjectCategory)}
              variant={filter === value ? "contained" : "outlined"}
              size="small"
            >
              {label}
            </Button>
          )
        )}
      </Stack>

      <Box className="projects-grid">
        {visible.map((project, index) => (
          <Paper key={`${project.title}-${project.image}-${index}`} className="project-card">
            <Box component="img" src={project.image} alt={project.title} />

            <Box className="project-content">
              <Typography variant="overline" color="secondary.main">
                {project.categoryLabel}
              </Typography>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {project.meta}
              </Typography>
              <Typography color="text.secondary" className="body-copy">
                {project.description}
              </Typography>

              <Stack direction="row" spacing={1} className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <Chip key={`${project.title}-${tag}-${tagIndex}`} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>
            </Box>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}
