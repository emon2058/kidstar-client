import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Program from '../Program/Program';

const Programs = () => {
    const [programs,setPrograms] = useState([]);
    useEffect(()=>{
        fetch('./programs.json')
        .then(res=>res.json())
        .then(data=>setPrograms(data))
    },[])
    return (
        <Container sx={{backgroundColor:'azure',textAlign:'center'}}>
            <Typography sx={{color:'orange',pt:2}} variant="h2">Our Popular Programs</Typography>
            <Grid container spacing={2}>
                {programs.slice(0,6).map(program=>
                    <Program key={program.id}
                    program={program}/>)}
            </Grid>
        </Container>
    );
};

export default Programs;