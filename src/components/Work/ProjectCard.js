import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Chip, Link, Stack, Typography } from "@mui/material";

export default function ProjectCard({projectName, projectDescription, projectSrc, projectUrl, projectSkills}) {
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
        <Typography variant="body2">
          {projectDescription}
        </Typography>
        <Stack className="project-skills-list" direction="row" spacing={1}>
          {projectSkills.map((skill) => <Chip key={projectSkills.indexOf(skill)} label={skill} />)}
        </Stack>
      </CardContent>
      <CardActions>
        <Link className="project-card-link" href={projectUrl} color="inherit" underline="hover" target="_blank">See On Github</Link>
      </CardActions>
    </Card>
  );
}