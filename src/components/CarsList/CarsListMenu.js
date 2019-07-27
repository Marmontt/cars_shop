import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from 'react-redux';
import {getCarsNumber} from "../../redux/selectors";
import {setFerrariState, setFordState, setLamborghiniState, setMaseratiState, setBentleyState} from "../../redux/actions/chosen_cars";
import {getFerrariState, getFordState, getLamborghiniState, getMaseratiState, getBentleyState} from '../../redux/selectors'


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
    const dispatch = useDispatch();
    const carsNumber = useSelector(getCarsNumber);

    const FerrariState = useSelector(getFerrariState);
    const FordState = useSelector(getFordState);
    const LamborghiniState = useSelector(getLamborghiniState);
    const MaseratiState = useSelector(getMaseratiState);
    const BentleyState = useSelector(getBentleyState);

    return (
        <Paper className={root}>
            <Grid container direction={'column'} justify={'space-between'} alignItems={'center'}>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Ferrari ({carsNumber[0]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={FerrariState}
                            onChange={() => dispatch(setFerrariState())}
                            color={'secondary'}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Ford ({carsNumber[1]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={FordState}
                            onChange={() => dispatch(setFordState())}
                            color={'secondary'}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Lamborghini ({carsNumber[2]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={LamborghiniState}
                            onChange={() => dispatch(setLamborghiniState())}
                            color={'secondary'}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Maserati ({carsNumber[3]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={MaseratiState}
                            onChange={() => dispatch(setMaseratiState())}
                            color={'secondary'}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={'space-between'} direction={'row'}>
                    <Grid item>
                        <Typography className={text}>Bentley ({carsNumber[4]})</Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={BentleyState}
                            onChange={() => dispatch(setBentleyState())}
                            color={'secondary'}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default CarsListMenu;