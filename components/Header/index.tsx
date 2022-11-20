import Image from 'next/image'
import { SideDrawer } from './Drawer';
import { Profile } from "./Profile";
import { Search } from "./Search";


export function Header(){
    return (
        <header className="flex w-full h-24 items-center py-4 justify-between">
            <Image className="w-full max-w-[85px] hidden font-serif xl:block" width="85" height='85' src="/logo.png" alt="Logo da empresa"/>
            <SideDrawer />
            <Search />
            <Profile />
        </header>
    )
}