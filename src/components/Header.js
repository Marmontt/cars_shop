import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from '../img/logo.png';
import About from './About';
import Button from '@material-ui/core/Button';
import TodaysDeals from './TodaysDeals';

const useStyles = makeStyles(theme => {
    return {
        root: {
            // marginLeft: theme.spacing(4),
            position: 'static',
        },
        header: {
            textAlign: 'justify',

        },
        logo: {
            width: 90,
            height: 80,
            cursor: 'pointer',
            marginLeft: 40,
        },
        button: {
            marginRight: 15,
        },
        buttons: {
            marginRight: 30,
        }
    };
});

const Header = () => {
    const {root, logo, button, header, buttons} = useStyles();
    return (
        <div className={root}>
            <Grid className={header} container justify={'space-between'} alignItems={'center'}>
                <Grid item>
                    <Link to={'/'}>
                        <img src={Logo} className={logo} alt="logo"/>
                    </Link>
                </Grid>
                <Grid item className={buttons}>
                    <Button component={Link} to={'/cars_list'} size={'large'} variant={'outlined'} color={'primary'}
                            className={button}>
                        Cars list
                    </Button>
                    <TodaysDeals/>
                    <Button size={'large'} variant={'outlined'} color={'primary'} className={button}>
                        Warranty
                    </Button>
                    <About/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;