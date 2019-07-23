import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 140px)',
        width: '72vw',
        maxWidth: '72vw',
        backgroundColor: '#9b9b9b',
        marginTop: 10,
        marginLeft: 10,
    },
});

const CarsList = () => {
    const {root} = useStyles();
    return (
        <Paper className={root}>

        </Paper>
    )
};

export default CarsList;