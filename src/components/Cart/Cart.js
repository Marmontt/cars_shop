import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useSelector} from 'react-redux';
import {getTotalCartPrice, getBuyingCars} from "../../redux/selectors";
import CartCarCard from './CartCarCard';
import Typography from '@material-ui/core/Typography';


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
                <Typography align={'right'}>{`Total Price: ${totalCartPrice}$`} </Typography>
            </Paper>
            {selectedCars.map(({BrandName, ModelName, price, img, count}) =>
                <CartCarCard BrandName={BrandName} ModelName={ModelName} price={price} img={img} count={count}/>
            )}
        </Paper>
    )
};

export default Cart;