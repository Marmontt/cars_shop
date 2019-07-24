import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CarCard from '../CarCard'
import Grid from '@material-ui/core/Grid';
import auto1 from '../../img/slider/auto1.jpg'
import auto2 from '../../img/slider/auto2.jpg'

const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 140px)',
        width: '72vw',
        maxWidth: '72vw',
        backgroundColor: '#9b9b9b',
        position: 'absolute',
        marginTop: 10,
        marginLeft: 10,
        overflow: 'auto',
    },
});

const CarsList = () => {
    const {root} = useStyles();
    return (
        <Paper className={root}>
            <Grid container justify={'flex-start'}>
                <Grid item>
                    <CarCard BrandName={'raq'} price={123} img={auto1} ModelName={'afasf'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
                <Grid item>
                    <CarCard BrandName={'raq1'} price={321} img={auto2} ModelName={'qwert'}/>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default CarsList;