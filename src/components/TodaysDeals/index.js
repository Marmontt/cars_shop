import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SimpleSlider from './SlickSlider';
import {useDispatch, useSelector} from 'react-redux';
import {openModal, closeModal} from '../../redux/actions/todays_deals';
import {getTodaysDealsOpenState} from '../../redux/selectors';

const useStyles = makeStyles({
    button: {
        marginRight: 15,
    },
});

const Specials = () => {

    const openStatus = useSelector(getTodaysDealsOpenState);
    const dispatch = useDispatch();
    const {button} = useStyles();


    const handleOpen = () => {
        dispatch(openModal());
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <>
            <Button className={button} onClick={handleOpen} size={'large'} variant={'outlined'} color={'primary'}>Today's Deals</Button>
            <Modal onClose={handleClose} open={openStatus}>
                <SimpleSlider/>
            </Modal>
        </>
    )
};

export default Specials;