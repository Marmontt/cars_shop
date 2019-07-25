import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import {openModal, closeModal} from '../redux/actions/about';
import {getAboutOpenState} from '../redux/selectors';

const useStyles = makeStyles({
    root: {
        width: 'calc(50vw - 220px)',
        minWidth: 300,
        height: '82vh',
        margin: 'auto',
        color: '#d7a400',
        border: '1px solid #FFC600',
        borderRadius: 10,
        backgroundColor: '#000000',
    },
    text: {
        cursor: 'default',
        height: '100%',
        padding: '2vw',
        userSelect: 'none',
        fontSize: '1.65vh'
    },
    paper: {},
});

const About = () => {
    const {root, text} = useStyles();
    const dispatch = useDispatch();
    const openStatus = useSelector(getAboutOpenState);

    const handleOpen = () => {
        dispatch(openModal());
    };

    const handleClose = () => {
        dispatch(closeModal());
    };


    return (
        <>
            <Button onClick={handleOpen} size={'large'} variant={'outlined'} color={'primary'}>
                About
            </Button>
            <Modal className={root} open={openStatus} onClose={handleClose}>
                <div className={text}>
                    <h2>About...</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet blanditiis culpa deserunt dicta
                    doloribus ducimus earum eius eos et ex facere inventore laudantium minima molestias nemo nihil
                    nulla
                    optio, saepe temporibus tenetur totam vel. Adipisci error et ex ipsa iusto maxime minus
                    molestias
                    nemo
                    odio perferendis, quae quas, rem repellat sit soluta unde voluptas? Atque et libero quaerat
                    sunt.
                    Facere
                    iste iure quia, quis quisquam ratione rem similique sunt. Amet animi at corporis deleniti
                    distinctio
                    doloremque dolores earum enim eos et exercitationem fugit illo in inventore itaque iusto maiores
                    molestias nam, optio pariatur, quaerat quibusdam quis recusandae sed tempora tenetur unde vel
                    veritatis
                    voluptas voluptate? A adipisci assumenda aut commodi deserunt doloribus enim eveniet
                    exercitationem
                    fugit impedit in incidunt iste iusto laudantium, magnam minus nemo nobis non pariatur provident
                    quam
                    qui
                    quidem quos ratione recusandae repellendus veniam voluptatem! Alias delectus dolor dolorem,
                    dolorum
                    fuga
                    fugit incidunt ipsum laudantium, magnam maxime nam necessitatibus quo totam veniam veritatis? A
                    deleniti
                    dignissimos dolor enim, expedita, illo maiores molestias nam nemo provident quisquam temporibus,
                    totam
                    voluptas. A, ad animi architecto beatae commodi cum delectus, dicta dolorem ducimus enim eos
                    error
                    et
                    exercitationem fuga fugiat harum illo iure laudantium libero molestiae mollitia nemo neque nulla
                    obcaecati pariatur, perspiciatis porro quas quibusdam quisquam reiciendis repellat reprehenderit
                    repudiandae sapiente sint sunt ullam vitae. A ab autem blanditiis culpa cumque ducimus ea ex
                    explicabo
                    facere incidunt, ipsum minima, molestias officia perferendis provident ratione rem similique
                    soluta
                    temporibus tenetur, ullam velit veniam voluptatem?
                </div>
            </Modal>
        </>
    )
};

export default About;