import React from 'react';
import {Link, Grid , makeStyles,Box}from '@material-ui/core/';

import Logotipo from "./Logotipo";
import FaceIcon from './FaceIcon'




const useStyles = makeStyles ({
    root: {
        backgroundColor:'#181818',
        color: '#ffff',
        fontSize: '18px',
        paddingTop:10,
    },
    icon: {
        color: '#ffff',
        fontSize: '18px',
        position: 'relative',
        float: 'left',
        top:50,
        right:30,
    },
    icono: {
        color: '#ffff',
        fontSize: '18px',
        position: 'relative',
        float: 'right',
        top:100,
        right:30,
    },


});

const Footer =(props) =>{
    const  classes  = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={3} className={classes.icon}>
                    <Logotipo/>
                </Grid>
                <Grid item xs={12} sm={12} lg={6} >
                    <Box p={4} align="justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <Box p={4}> SIGUENOS EN: </Box>
                </Grid>
                <FaceIcon/>
            </Grid>

        </div>


    )
}

export default Footer;
