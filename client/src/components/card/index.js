import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Make {user.username}'s image"
          height="140"
          src="https://via.placeholder.com/150"
          title="Make {user.username}'s image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* will be user.bio */}
            Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard Lizard 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          button1 
        </Button>
        <Button size="small" color="primary">
          button2
        </Button>
      </CardActions>
    </Card>
  );
}
