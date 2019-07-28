import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useSelector} from 'react-redux';
import {getTotalCartPrice, getBuyingCars} from "../../redux/selectors";
import CartCarCard from './CartCarCard';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 120px)',
        width: 'calc(100% - 92px)',
        backgroundColor: '#9b7220',
        marginTop: 20,
        margin: 'auto',
        opacity: .9,
        overflow: 'auto',
    },
    priceStyle: {
        margin: 3,
        padding: 10,
    }
});

const Cart = () => {
    const {root, priceStyle} = useStyles();
    const totalCartPrice = useSelector(getTotalCartPrice);
    const selectedCars = useSelector(getBuyingCars);

    return (
        <Paper className={root}>
            <Paper className={priceStyle}>
                <Grid container alignItems={'center'} justify={'space-between'}>
                    <Grid item>
                        <Button variant={'contained'} size="large" color='secondary' disabled={!totalCartPrice}>
                            ORDER
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography>{`Total Price: ${totalCartPrice}$`} </Typography>
                    </Grid>
                </Grid>
            </Paper>
            {selectedCars.map(({BrandName, ModelName: model, price, img, count}) =>
                <div key={model}>
                    <CartCarCard BrandName={BrandName} ModelName={model} price={price} img={img} count={count}/>
                </div>
            )}
        </Paper>
    )
};

export default Cart;