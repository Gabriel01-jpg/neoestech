import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Content({ children } : Props) {
    return (
        <div className="w-screen h-screen bg-white-100">
            <div className="flex-column w-full max-w-7xl mx-auto px-2">
                {children}
            </div>
        </div>
        
    )
}