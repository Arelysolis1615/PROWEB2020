import React from 'react';
import {Link, Grid , makeStyles}from '@material-ui/core/';
import Logotipo from "./Logotipo";
import MenuR from "./MenuR";
import Hidden from '@material-ui/core/Hidden';
import {Box} from "@material-ui/core";
import MenuMobile from "./MenuMobile";


//aqui creamos los estilos
const useStyles = makeStyles ({
        root: {
                flexGrow: 1,
        },
        menu: {
                alignItems: 'flex-end',
                textAlign:'center',
        }
});

const Navbar = (props) => {
        const  classes  = useStyles();
        //console.log(props);
        return(
            <div>
                <Grid container spacing={3} className={classes.menu}>

                        <Grid className={classes.menu} item xs={12} md={1} lg={1} display="flex" align='center' flexDirection="row-reverse">
                            <Hidden smDown>
                            <Link
                                component="button"
                                variant="body2"
                                underline="none"

                                onClick={() => { console.info("I'm a button.");   }}>

                                <h5>Menú</h5>

                            </Link>
                                </Hidden>
                        </Grid>
                        <Grid className={classes.menu} item xs={12} md={3} lg={3} display="flex" flexDirection="row-reverse">
                            <Hidden smDown>
                            <Link
                                component="button"
                                variant="body2"
                                underline="none"
                                onClick={() => { console.info("I'm a button.");   }}><h5>Galería</h5>
                            </Link>
                            </Hidden>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}>
                            <Logotipo systemName={props.systemName}/>
                        </Grid>

                        <Grid className={classes.menu} item xs={12} md={1} lg={1} display="flex" flexDirection="row-reverse">
                            <Hidden smDown>
                            <Link
                                component="button"
                                variant="body2"
                                underline="none"
                                onClick={() => {console.info("I'm a button."); }}><h5>Galería</h5>
                            </Link>
                            </Hidden>
                        </Grid>
                        <Grid className={classes.menu} item xs={12} md={3} lg={3} display="flex" flexDirection="row-reverse">
                            <Hidden mdUp>
                                <MenuMobile/>
                            </Hidden>
                            <Hidden smDown>
                            <Link
                                component="button"
                                variant="body2"
                                underline="none"
                                onClick={() => {console.info("I'm a button."); }}><h5>Contacto y ubicación</h5>
                            </Link>
                            </Hidden>

                        </Grid>

                </Grid>
            </div>
        )
};

//Definir cual es el componente que por default se va a estar exportando
export default Navbar;

//En una funcion flecha podemos agregar parametros los cuales van entre los parentesis