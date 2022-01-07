import { Container, Typography } from '@mui/material';
import React from 'react';

const AboutBg={
    width:'100%',
    backgroundImage:`url('https://images.unsplash.com/photo-1492892132812-a00a8b245c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
    backgroundRepeat:'no-repeat',
    color:'honeydew',
    backgroundSize: '100%',
    padding:3
}
const About = () => {
    return (
        <Container sx={AboutBg}>
            <Typography variant="h2" gutterBottom component="div">
                About Us
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
            Caring for Our Future, Our Greatest Resource, Our Children
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
            Our mission is to provide a special place where we inspire every child to learn and grow! We are committed to fostering a loving, nurturing, safe and home-like environment. Children’s Learn and Play provides a learning experience for each child in preparation for early success and school readiness. Our goal is to support every child’s desire to be a life-long learner by fostering a fun, educational, early learning experience which supports the needs of the whole child’s social, emotional, physical and cognitive development
            </Typography>
        </Container>
    );
};

export default About;