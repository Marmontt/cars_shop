import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles({
    root: {},
});

const InitialPage = () => {
    const {root} = useStyles();
    return (
        <div className={root}>

        </div>
    );
};

export default InitialPage;