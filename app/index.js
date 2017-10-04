import React from 'react'
import { render } from 'react-dom';
import Hello from './components/hello'
import { AppContainer } from 'react-hot-loader';

//console.log(react.version);
render(
    <AppContainer>
        <Hello/>
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept('./components/hello', () => {
        const NewHello = require('./components/hello').default;
        render(
            <AppContainer>
                <NewHello/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}