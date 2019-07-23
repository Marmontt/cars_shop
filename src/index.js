import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store'
import App from './App';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b98f20',
            light: '#62727b',
            dark: '#102027',
            contrastText: '#AF8520',
        },
        secondary: {
            main: '#263238',
            light: '#4f5b62',
            dark: '#000a12',
            contrastText: '#af8520',
        },
    },
});

const body = document.getElementsByTagName("body")[0];
body.style.background = "url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fw-dog.net%2Fwallpapers%2F0%2F11%2F323723122114199.jpg&f=1) no-repeat fixed center center";
body.style.backgroundSize = 'cover';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline/>
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>
    , document.getElementById('root'));