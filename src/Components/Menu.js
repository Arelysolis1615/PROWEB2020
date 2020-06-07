import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const useStyles = makeStyles((theme)=> ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 800,
    },

}));


const Menu=() =>{

    const classes=useStyles();

    return(
        <div className={classes.root}>

            <p align="left"> Disfruta de una rica variedad de carnes y bebiidas.</p>
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                <GridListTile key={'x'} cols={2}>
                    <img src={'imagenes/carne.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'imagenes/alitas.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'imagenes/nachos.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'imagenes/molcajete.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'imagenes/tacos_carne.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={1}>
                    <img src={'imagenes/cocteles.jpg'} alt={'Example'} />
                </GridListTile>
                <GridListTile key={'x'} cols={2}>
                    <img src={'imagenes/modelo.jpg'} alt={'Example'} />
                </GridListTile>

            </GridList>
        </div>


    )
}
export default Menu;