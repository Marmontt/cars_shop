import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/styles';
import {useDispatch} from 'react-redux';
import {addCar} from "../../redux/actions/cart";

const useStyles = makeStyles({
    root: {
        margin: '.6rem',
        border: '1px solid #000',
        borderRadius: 10,
    },
    image: {
        width: '100%',
    },
    description: {
        height: 90
    },
    buttonsArea: {
        // marginBottom: 10,
    },
    text: {
        marginTop: -10,
        fontSize: '1.2rem',
    },
});

const CarCard = ({BrandName, ModelName, price, img}) => {
    const {root, buttonsArea, image, description, text} = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={root}>
            <CardActionArea onClick={() => dispatch(addCar(BrandName, ModelName, price, img))}>
                <CardMedia
                    className={image}
                    image={img}
                    component='img'
                />
                <CardContent className={description}>
                    <Grid container direction={'column'} justify={'space-between'} alignItems={'flex-start'}>
                        <Grid item>
                            <Typography className={text} gutterBottom variant="h6">
                                {`Brand: ${BrandName}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={text} gutterBottom variant="h6">
                                {`Model: ${ModelName}`}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={text} gutterBottom variant="h6">
                                {`Price: ${price}$`}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions className={buttonsArea}>
                <Button
                    onClick={() => dispatch(addCar(BrandName, ModelName, price, img))}
                    variant={'contained'}
                    size="large"
                    color='secondary'
                >
                    Purchase
                </Button>
                <Button variant={'contained'} size="large" color='secondary'>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

CarCard.propTypes = {
    BrandName: PropTypes.string.isRequired,
    ModelName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};

export default CarCard;