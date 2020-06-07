import React from 'react';
import {Link,makeStyles, Grid}from '@material-ui/core/';
import Hidden from "@material-ui/core/Hidden";
import Logotipo from "./Logotipo";
import {Box} from "@material-ui/core";

const useStyles = makeStyles ({
    item: {
        paddingLeft:10
    },

});

const  MenuR =(props)=>{
    const classes=useStyles();
    return(
        <div>
            <Grid container spacing={3} className={classes.menu}>

                <Grid className={classes.menu} item xs={12} lg={1} display="flex" align='center' flexDirection="row-reverse">
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
                <Grid className={classes.menu} item xs={12} lg={3} display="flex" flexDirection="row-reverse">
                    <Hidden smDown>
                        <Link
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => { console.info("I'm a button.");   }}><h5>Galería</h5>
                        </Link>
                    </Hidden>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Logotipo systemName={props.systemName}/>
                </Grid>

                <Grid className={classes.menu} item xs={12} lg={1} display="flex" flexDirection="row-reverse">
                    <Hidden smDown>
                        <Link
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {console.info("I'm a button."); }}><h5>Galería</h5>
                        </Link>
                    </Hidden>
                </Grid>
                <Grid className={classes.menu} item xs={12} lg={3} display="flex" flexDirection="row-reverse">
                    <Hidden smDown>
                        <Link
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {console.info("I'm a button."); }}><h5>Contacto y ubicación</h5>
                        </Link>
                    </Hidden>
                    <Hidden smUp>
                        <Box>Menu</Box>
                    </Hidden>
                </Grid>

            </Grid>
        </div>
    )
}
export default MenuR;