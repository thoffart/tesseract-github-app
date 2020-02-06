import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';
import { User } from '../../models/user';
import Moment from 'react-moment';

const useStyles = makeStyles({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        maxWidth: 350,
        textAlign: "center"

    },
});

type UserCardProps = {
    user: User,
}

export default function UserCard({ user }: UserCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={user.avatar_url} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {user.login}
        </Typography>
        {
          (user.loadedAllData)
            ? <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Repositórios: {user.public_repos}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Seguidores: {user.followers}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Data: 
                  <Moment format="DD/MM/YYYY">
                    {user.created_at}
                  </Moment>
                </Typography>
              </div>
            : null
        }
      </CardContent>
    </CardActionArea>
  </Card>
  );
}
