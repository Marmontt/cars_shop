import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useSelector} from "react-redux";
import {getCarsNumber} from "../../redux/selectors";


const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 140px)',
        width: '18vw',
        backgroundColor: '#9b9b9b',
        marginTop: 10,
        marginLeft: 10,
        overflow: 'auto',
    },
    category: {
        margin: 'auto',
        alignItems: 'center',
    },
    text: {
        marginTop: 8,
        marginLeft: 10,
    },
});

const CarsListMenu = () => {
    const {root, text} = useStyles();
    const carsNumber = useSelector(getCarsNumber);

    return (
        <Paper className={root}>
            <Grid container direction={'column'} justify={'space-between'} alignItems={'center'}>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Ferrari ({carsNumber[0]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox color={'secondary'}/>
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Ford ({carsNumber[1]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox color={'secondary'}/>
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Lamborghini ({carsNumber[2]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox color={'secondary'}/>
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Maserati ({carsNumber[3]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox color={'secondary'}/>
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Bentley ({carsNumber[4]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox color={'secondary'}/>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default CarsListMenu;