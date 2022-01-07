import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const inspiringBG = {
    width:'100%',
    backgroundImage: `url('https://media.istockphoto.com/photos/two-boys-dressed-as-nerds-smiling-with-mind-reading-helmets-picture-id545249650')`,
    backgroundRepat:'no-repeat',
    padding:5,
    opacity:0.8

}
const Inspiring = () => {
    return (
        <Container sx={{backgroundColor:'#f6e8d5', padding:5}}>
            <Typography variant="h2" gutterBottom component="div" sx={{ color: 'success.main',my:5,textAlign:'center' }}>
                Inspiring Young Mind
            </Typography>
            <Grid container spacing={2}>
                <Grid item sx={{height:'auto',px:10}} xs={12} md={7} >
                    <Typography variant="body1" gutterBottom component="div">Prior to this year, both students and teachers had very little exposure to engineering practices and the process of engineering design. To begin to help students conceptualize the nature of engineering and the distinctions between science and engineering practices, we spent a week laying the foundation. We started by establishing an understanding of technology by gathering all three classes together and asking students to “popcorn” answers to the question, “What comes to mind when you hear the word technology?” Each response gets recorded for the class. Student ideas included those such as cars, internet, CGI, holograms, internet, phone, wires, circuit board.</Typography>
                </Grid>
                <Grid sx={{pl:3}} container xs={12} md={5}>
                    <iframe width="100%" height="280" src="https://www.youtube.com/embed/nsGl7L872Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Inspiring;