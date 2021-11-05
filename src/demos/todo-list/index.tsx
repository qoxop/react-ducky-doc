import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

const Loading = () => <div>loading</div>;

export default function() {
    const isBrowser = useIsBrowser();
    const LoadingComponent = isBrowser ? React.lazy(() => import('./bundle')) : Loading;
    return <LoadingComponent />
}