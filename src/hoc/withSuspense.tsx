import { Preloader } from "../components/common/Preloader/Preloader";
import React, { ComponentType, LazyExoticComponent, Suspense } from "react";

export const withSuspense = <P extends object>(Component: LazyExoticComponent<ComponentType<P>>) => {
    return (props: P) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        );
    };
};
