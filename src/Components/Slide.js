import React from 'react';
import {Container,Box, makeStyles} from '@material-ui/core';
import MediaCard from "./MediaCard";

const useStyles = makeStyles ({
    root: {
        marginTop:11
    },

});

const Slides = (props) => {
    const  classes  = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root}>

            <MediaCard src={'imagenes/restaurante2.jpg'} height={550} width={2000} />
        </Container>
    )
}
export default Slides;