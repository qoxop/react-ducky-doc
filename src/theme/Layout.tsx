import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import {  ReduxProvider } from 'react-ducky';
import { store } from 'src/store'


export default function Layout(props) {
    return (
        <ReduxProvider store={store}>
            <OriginalLayout {...props} />
        </ReduxProvider>
    );
}