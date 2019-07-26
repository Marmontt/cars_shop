import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import auto1 from '../../img/slider/auto1.jpg';
import auto2 from '../../img/slider/auto2.jpg';
import auto3 from '../../img/slider/auto3.jpg';
import auto4 from '../../img/slider/auto4.jpg';
import auto5 from '../../img/slider/auto5.jpg';
import auto6 from '../../img/slider/auto6.jpg';

const useStyles = makeStyles({
    root: {
        width: 'calc(100% - 750px)',
        maxWidth: 1280,
        minWidth: 450,
        minHeight: 290,
        maxHeight: 720,
        margin: 'auto',
        transform: 'translate(0, 25%)',
        height: 'calc(100vh - 250px)',
        borderRadius: 8,
    },
    img: {
        width: '100%',
        height: '100%',
        margin: 'auto',
    },
    text: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
});


const SimpleSlider = React.forwardRef(() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
    };
    const {root, img, text} = useStyles();
    return (
        <div className={root}>
            <Slider {...settings}>
                <div>
                    <img src={auto1} className={img} alt="car1"/>
                    <Typography align={'center'} color={'primary'} className={text} variant={'subtitle2'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </div>
                <div>
                    <img src={auto2} className={img} alt="car2"/>
                    <Typography align={'center'} color={'primary'} className={text} variant={'subtitle2'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </div>
                <div>
                    <img src={auto3} className={img} alt="car3"/>
                    <Typography align={'center'} color={'primary'} className={text} variant={'subtitle2'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </div>
                <div>
                    <img src={auto4} className={img} alt="car4"/>
                    <Typography align={'center'} color={'primary'} className={text} variant={'subtitle2'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </div>
                <div>
                    <img src={auto5} className={img} alt="car5"/>
                    <Typography align={'center'} color={'primary'} className={text} variant={'subtitle2'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </div>
                <div>
                    <img src={auto6} className={img} alt="car6"/>
                    <Typography align={'center'} color={'primary'} className={text} variant={'subtitle2'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </div>
            </Slider>
        </div>
    );
});

export default SimpleSlider;