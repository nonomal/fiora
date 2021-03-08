/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import store from './state/store';

export default function App(props: any) {
    return (
        <Provider store={store}>
            <Main {...props} />
        </Provider>
    );
};
