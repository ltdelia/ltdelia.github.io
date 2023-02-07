import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

export default function Work() {
  return (
    <>
      <Container fixed>
        <Box>
          <div id="work">
            <h2>Work</h2>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {projects.map((project) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  key={projects.indexOf(project)}
                >
                  <ProjectCard
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectSrc={project.projectSrc}
                    projectUrl={project.projectUrl}
                    projectSkills={project.projectSkills}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </Container>
    </>
  );
}
