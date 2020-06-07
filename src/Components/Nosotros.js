import React from 'react';
import {Link, Grid , makeStyles}from '@material-ui/core/';
import MediaCard from "./MediaCard";
import './Nosotros.css';

const useStyles = makeStyles ({
    root: {
        marginTop:-20
    },

});

const Nosotros =(props) =>{
    const  classes  = useStyles();
    return(

        <Grid container spacing={3} className={classes.root}>


            <Grid item xs={12} s={12} md={3} lg={3}>
                <MediaCard src={'imagenes/equipo.jpg'} height={220} width={'100%'}/>
            </Grid>
            <Grid item xs={12} s={12} md={9} lg={9}>
                <p align="justify">Restaurante - Karaoke - Bar

                    Nuestro propósito es que salgas del bar típico y convirtiéndonos en un lugar no importa que seas hombre o mujer saca aquel artista que llevas dentro cantes bien o mal no importa, es tu momento de brillar y divertirte mientras te tomas una copa. El principal objetivo es diseñar un espacio funcional y atractivo, para ti y nuestros colaboradores, queremos reflejar lo dinámico, divertido, agradable y placentero que es DejaVu. Te ofrecemos la venta de bebidas y alimentos con los cuales puedes disfrutar mientras cantas y bailas las canciones que más te gustan con tus amigos.</p>
            </Grid>


        </Grid>
    )
}

export default Nosotros;
