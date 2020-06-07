import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link, Grid , makeStyles,Box}from '@material-ui/core/';

const useStyles = makeStyles ({

    icono: {
        color: 'blue',
        fontSize: '18px',
        position: 'relative',
        float: 'right',
        top:-22,
        right:30,
    },


});

const FaceIcon=(props)=>{
    const  classes  = useStyles();
    return(
        <FacebookIcon className={classes.icono}/>
    )
}

export default FaceIcon;