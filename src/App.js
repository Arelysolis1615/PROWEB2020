import React from 'react';
import Container from '@material-ui/core/Container';

import logo from './logo.svg';
import './App.css';
import './Components/Header.css';
import Navbar from "./Components/NavBar";
import Slides from "./Components/Slide";

import Typography from '@material-ui/core/Typography';
import Nosotros from "./Components/Nosotros";
import Subtitulos from "./Components/Subtitulos";
import Galeria from "./Components/Galeria";
import Ubicacion from "./Components/Ubicación";
import Reserva from "./Components/Reserva";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";






function App() {

    const config = {
        systemName: ''
    }

    return (
        <div className="App" >
            <Container className="nueva" maxWidth="xl" container spacing={1}>
                <Navbar systemName={ config.systemName}  />

            </Container>

            <Container maxWidth="xl" container spacing={1}>
                <Slides/>
            </Container>

            <Container maxWidth={"lg"}>
                <h2 align="justify"> NOSOTROS.</h2>
                <Nosotros/>
                <h2 align="justify"> GALERÍA.</h2>
                <Galeria/>
                <h2 align="justify"> MENÚ.</h2>
                <Menu/>
                <h2 align="justify"> UBICACIÓN.</h2>
                <Ubicacion/>
                <h2 align="justify"> RESERVA CON NOSOTROS.</h2>
                <Reserva/>

            </Container>
            <Container className="nueva" maxWidth="xl" container spacing={1}>
                <Footer/>

            </Container>




        </div>
    );
}


export default App;
