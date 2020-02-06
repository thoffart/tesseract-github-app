import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        width: 450,
    },
    card: {
        display: 'flex',
        padding: 10, 
    },
    cover: {
         width: 100,
    },
  }),
);

type OrganizationCardProps = {
    name: string | undefined,
    email: string | undefined,
    avatar_url: string | undefined,
}

export default function OrganizationCard({ name, email , avatar_url}: OrganizationCardProps) {
  const classes = useStyles();

  return(
    (name !== undefined && email !== undefined && avatar_url !== undefined)
    ?
    <div className={classes.root}>
        <Card className={classes.card}>
            <CardMedia
            className={classes.cover}
            image={avatar_url}
            />
            <CardContent>
            <Typography component="h5" variant="h5">
                {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {email}
            </Typography>
            </CardContent>
        </Card>
    </div>
    : <div></div>
  );
}