import React, { ComponentType } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

const Loading = () => <div>loading...</div>;
const W = (props: any) => props.children;
type Loader<P = any> =  () => Promise<{ default: ComponentType<P> }>

export default function<P = any, L extends Loader<P> = any>(ComponentLoader: L, name?: string) {
    function InnerComponent(props: any) {
        const isBrowser = useIsBrowser();
        const Component = isBrowser ? React.lazy(ComponentLoader) : Loading;
        return <Component {...props} />
    }
    function DynamicComponent(props: P) {
        const isBrowser = useIsBrowser();
        const Wrapper = isBrowser ? React.Suspense : W;
        return <Wrapper fallback={<Loading />}>
            <InnerComponent {...props} />
        </Wrapper>
    }
    DynamicComponent.displayName = name || 'DynamicComponent';
    return DynamicComponent;
}