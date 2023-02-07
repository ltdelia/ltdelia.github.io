import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import SkillCard from "./SkillCard";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <>
      <Container fixed>
        <Box>
          <div id="skills">
            <h2>Skills</h2>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {skills.map((skill) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={skills.indexOf(skill)}
                >
                  <SkillCard
                    skillName={skill.skillName}
                    skillDescription={skill.skillDescription}
                    skillSrc={skill.skillSrc}
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
