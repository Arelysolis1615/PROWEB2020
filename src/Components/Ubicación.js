import React from 'react';
import {Link, Grid , makeStyles}from '@material-ui/core/';
import MediaCard from "./MediaCard";

const useStyles = makeStyles ({
    root: {
        marginTop:-20
    },

});

const Ubicacion=(props)=>{
    const  classes  = useStyles();
    return(
        <Grid container spacing={3} className={classes.root}>

            <Grid item xs={12} lg={8}>
                <p align="justify"> Ven y conocenos en una excelente ubicación, con un excelente ambiente familiar y
                    musica para todos
                    los gustos, te esperamos en tu casa DEJA VU.</p>
            </Grid>
            <Grid item xs={12} xs={4}>
                <MediaCard src={'imagenes/mapa.jpg'} height={200}/>

            </Grid>


        </Grid>
    )
}

export default Ubicacion;