import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/typography";

export default function ProjectCard({
  projectName,
  projectDescription,
  projectSrc,
  projectUrl,
  projectSkills,
}) {
  return (
    <Card className="project-card" sx={{ minWidth: 200, minHeight: 570 }}>
      <CardMedia
        component="img"
        image={projectSrc ? projectSrc : "images/coding.jpg"}
        alt={projectName}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2">{projectDescription}</Typography>
        <Stack className="project-skills-list" direction="row" spacing={1}>
          {projectSkills.map((skill) => (
            <Chip key={projectSkills.indexOf(skill)} label={skill} />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Link
          className="project-card-link"
          href={projectUrl}
          color="inherit"
          underline="hover"
          target="_blank"
        >
          See On Github
        </Link>
      </CardActions>
    </Card>
  );
}
