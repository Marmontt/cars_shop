import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CarCard from './CarCard'
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedCars} from '../../redux/selectors';
import {getCarsList} from '../../redux/actions/cars';

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarsList());
    }, []);

    const carsList = useSelector(getSelectedCars);

    return (
        <Paper className={root}>
            <Grid container justify={'flex-start'}>
                {!carsList.length ?
                    <Grid container justify={'center'}>
                        <h1>Loading...</h1>
                    </Grid> :
                    carsList.map(({BrandName, ModelName: model, price, img}) =>
                        <Grid item xs={4} key={model}>
                            <CarCard BrandName={BrandName} ModelName={model} price={price} img={img}/>
                        </Grid>)}
            </Grid>
        </Paper>
    )
};

export default CarsList;