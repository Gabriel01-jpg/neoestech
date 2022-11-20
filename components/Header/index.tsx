import { SideDrawer } from './Drawer';

import { Profile } from "./Profile";
import { Search } from "./Search";


export function Header(){
    return (
        <header className="flex w-full h-24 items-center py-4 justify-between">
            <img className="w-full max-w-[85px] hidden font-serif xl:block" src="logo.png" alt="Logo da empresa"/>
            <SideDrawer />
            <Search />
            <Profile />
        </header>
    )
}