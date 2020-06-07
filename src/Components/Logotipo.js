import React from 'react';
import './Logotipo.css';
import {Box} from "@material-ui/core";

const Logotipo = (config) => {

    return(
        <div>
            <img src={'imagenes/recortado_DEJAVU.png'} className={'Logo'} />
            <Box component={"span"} className={'Logo'}>
                {config.systemName}
            </Box>

        </div>

    )
};

export default Logotipo;