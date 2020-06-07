import React from 'react';
import Grid from "@material-ui/core/Grid";
import MediaCard from "./MediaCard";

const Galeria=(props) =>{
    return(



        <Grid container spacing={3}>

            <Grid item xs={12}  s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/alitas.jpg'} height={200}/>
            </Grid>
            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/nachos.jpg'} height={200}/>
            </Grid>
            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/molcajete.jpg'} height={200}/>
            </Grid>
            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/carajillo.jpg'} height={200}/>
            </Grid>

            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/cocteles.jpg'} height={200}/>
            </Grid>
            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/vinos.jpg'} height={200}/>
            </Grid>
            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/clericot.jpg'} height={200}/>
            </Grid>
            <Grid item xs={12} s={6} md={3} lg={3}>
                <MediaCard src={'imagenes/modelo.jpg'} height={200}/>
            </Grid>



        </Grid>


    )
}
export default Galeria;