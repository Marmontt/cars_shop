import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import CarsListMenu from './CarsListMenu';
import CarsList from './CarsList';

const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 120px)',
        width: 'calc(100% - 92px)',
        backgroundColor: '#fff',
        marginTop: 20,
        margin: 'auto',
        opacity: .9,
        overflow: 'hidden',
    },
});

const Index = () => {
    const {root} = useStyles();
    return (
        <Paper className={root}>
            <Grid container>
                <Grid item>
                    <CarsListMenu/>
                </Grid>
                <Grid item>
                    <CarsList/>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default Index;
