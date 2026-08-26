import { Box, Typography } from "@mui/material";
import Section from "./Section";
import { journey } from "./data";
export default function Journey() { return <Box id="journey" className="journey-band"><Section eyebrow="The long view" title="A journey still in motion."><Box className="timeline">{journey.map(([date, title, description]) => <Box key={title} className="timeline-item"><Typography variant="overline">{date}</Typography><Typography variant="h5">{title}</Typography><Typography>{description}</Typography></Box>)}</Box></Section></Box>; }
