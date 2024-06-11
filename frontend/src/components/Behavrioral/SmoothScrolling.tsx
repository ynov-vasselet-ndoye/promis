"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: React.PropsWithChildren): React.ReactElement {
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;