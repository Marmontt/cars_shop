import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import AddBox from '@material-ui/icons/AddBox';
import {useDispatch} from 'react-redux';
import {addCar, removeCar} from "../../redux/actions/cart";


const useStyles = makeStyles({
    root: {
        width: 'calc(100% - 20px)',
        height: 200,
        margin: 10,
    },
    image: {
        margin: 10,
        height: 180,
    },
    text: {
        padding: 10,
    },
    carPrice: {
        marginLeft: 10,
        marginRight: 10,
    },
    countStyle: {
        marginTop: 70,
    },
    totalPriceStyle: {
        marginRight: 20,
    },
});

const CartCarCard = ({BrandName: brand, ModelName: model, price, img, count}) => {
    const {root, image, text, countStyle, totalPriceStyle} = useStyles();
    const dispatch = useDispatch();

    return (
        <Paper className={root}>
            <Grid container alignItems={'center'} justify={'space-between'}>
                <Grid item>
                    <Grid container justify={'flex-start'}>
                        <Grid item>
                            <img className={image} src={img} alt="car_image"/>
                        </Grid>
                        <Grid item className={text}>
                            <Grid item>
                                <Typography>
                                    {`Brand: ${brand}`}
                                </Typography>
                                <Typography>
                                    {`Model: ${model}`}
                                </Typography>
                                <Typography>
                                    {`Price: ${price}$`}
                                </Typography>
                            </Grid>
                            <Grid item className={countStyle}>
                                <Grid container alignItems={'center'} justify={'center'}>
                                    <Grid item>
                                        <IconButton onClick={() => dispatch(removeCar(model, price))}
                                                    color={'secondary'}>
                                            <IndeterminateCheckBox/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'h5'}>
                                            {`Count: ${count}`}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={() => dispatch(addCar(brand, model, price, img))}
                                                    color={'secondary'}>
                                            <AddBox/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={totalPriceStyle}>
                    <Typography variant={'h4'}>{`: ${count * price}$`}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CartCarCard;