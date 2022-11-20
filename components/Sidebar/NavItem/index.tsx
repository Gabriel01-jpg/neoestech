import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
    routePath: string;
    children: ReactNode;
}

export function Navitem({ children, routePath } : Props){
    const route = useRouter();
    const isActive = route.pathname.includes(routePath);

    return (
        <Link href={routePath} className='hover:underline'>
            <li className={`flex gap-2 items-center font-medium
            text-base ${isActive ? 'text-orange-800' : 'text-gray-400'} hover:underline`} >
                {children}
            </li>
        </Link>
    )
}