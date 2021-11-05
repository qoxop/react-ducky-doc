import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import {  ReduxProvider } from 'react-ducky';
import { store } from 'src/store'
import useIsBrowser from '@docusaurus/useIsBrowser';

const W = (props: any) => props.children;

export default function Layout(props) {
    const isBrowser = useIsBrowser();
    const Wrapper = isBrowser ? React.Suspense : W;
    return (
        <Wrapper fallback={<div> loading... </div>}>
            <ReduxProvider store={store}>
                <OriginalLayout {...props} />
            </ReduxProvider>
        </Wrapper>
        
    );
}