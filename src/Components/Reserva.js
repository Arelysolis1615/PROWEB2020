import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        width:'100%',
    },
    form:{
        maxWidth:'400px',
        float:'left'
    },
    back:{
        background:'url("imagenes/logo_completo.png") no-repeat top center',
        backgroundSize:'25%',
        height:300
    },
    '@media (max-width: 1166px)':{
        back: {
            background: 'none',
            height:300
        },
        form:{
            maxWidth:'90%',
            margin:'auto'
        }
    }
}));

const Reserva=(props)=>{
    const  classes  = useStyles();
    const selectedDate = new Date();
    return(
        <div className={classes.back}>
            <FormControl className={classes.margin}>
                <Box className={classes.form}>
                    <InputLabel htmlFor="input-with-icon-adornment" fullWidth>Nombre</InputLabel>
                    <Input
                        id="input-with-icon-adornment" fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                    <TextField id="standard-basic" label="Correo" fullWidth/>
                    <TextField id="standard-basic" label="Telefono" fullWidth />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de Reservación"
                            value={selectedDate}
                            onChange={''}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            fullWidth
                        />
                    </MuiPickersUtilsProvider>
                    <Button variant="contained" fullWidth>ENVIAR</Button>
                </Box>

            </FormControl>



        </div>


    )
}

export default Reserva;