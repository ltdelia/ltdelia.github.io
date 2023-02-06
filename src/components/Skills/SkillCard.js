import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export default function SkillCard({skillName, skillDescription, skillSrc}) {
  return (
    <Card sx={{ minWidth: 200, minHeight: 450}}>
      <CardMedia
        component="img"
        image={skillSrc}
        alt={skillName}
      />
      <CardContent>
        <Typography variant="h5" component="div">
            {skillName}          
        </Typography>
        <Typography variant="body2">
          {skillDescription}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">See Projects With This Skill</Button>
      </CardActions> */}
    </Card>
  );
}