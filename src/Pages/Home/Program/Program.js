import { Grid, Stack } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Program = ({program}) => {
    const {id,name,price,img,seat,age,description} = program;
    return (
        <Grid container item direction="row" sx={{pt:3}}justifyContent="center" xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345, margin:5,boxShadow: 3}}>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography gutterBottom variant="subtitle2" component="span">
                        Age: {age}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="span">
                        Seat: {seat}
                        </Typography>
                    </Stack>
                </CardContent>
                    <Stack direction="row" justifyContent="space-between">
                <CardActions>
                    <Link to={`/program/${id}`}>
                        <Button size="small">Book Class</Button>
                    </Link>
                </CardActions>
                        <Typography sx={{pr:2}} gutterBottom variant="subtitle2" component="span">
                            ${price}
                        </Typography>
                    </Stack>
            </Card>
        </Grid>
    );
};

export default Program;