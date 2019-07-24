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

const useStyles = makeStyles({
    root: {
        width: 200,
        height: 200,
        margin: '.6rem',
        border: '1px solid #000',
        opacity: '1',
    },
    image: {
        width: '100%',
    },
    description: {
        height: 50,
        marginTop: -10,
    },
    btn: {

    }
});

const CarCard = ({BrandName, ModelName, price, img}) => {
    const {root,btn, image, description} = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={root}>
            <CardActionArea>
                <CardMedia
                    className={image}
                    image={img}
                    component='img'
                />
                <CardContent className={description}>
                    <Grid container justify={'space-between'} alignItems={'flex-start'}>
                        <Grid item>
                            <Typography gutterBottom variant="h6">
                                {`${BrandName} ${ModelName} ${price}$`}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant={'outlined'} size="small" color='secondary' className={btn}>
                    Purchase
                </Button>
                <Button variant={'outlined'} size="small" color='secondary' className={btn}>
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