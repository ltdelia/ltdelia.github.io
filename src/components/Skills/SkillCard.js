import * as React from 'react';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/typography";

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