import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function MediaCard(props) {
    const useStyles = makeStyles({
        root: {
            Width: '100%',
            borderRadius:0
        },
        media: {
            height: props.height,
            width:props.width,

        },
    });
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.src}
                    title="Contemplative Reptile"
                />

            </CardActionArea>

        </Card>
    );
}
