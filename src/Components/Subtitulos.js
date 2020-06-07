import React from 'react';
import {Link, Grid , makeStyles}from '@material-ui/core/';


const useStyles = makeStyles ({
    root: {
        marginTop:-10
    },
    texto: {

        textAlign:'left',
    }

});


const Subtitulos=(props)=>{

    const  classes  = useStyles();
    return(

        <Grid container spacing={3} className={classes.root} >

            <Grid item xs={2} className={classes.texto}>
                <p>NOSOTROS</p>
            </Grid>
            <Grid item xs={10}>

            </Grid>


        </Grid>
    )
}

export default Subtitulos;