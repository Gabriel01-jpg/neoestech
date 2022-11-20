import { Drawer } from "antd";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "../../Sidebar";

export function SideDrawer(){

    const [isOpen, setIsOpen] = useState(false);

    const handleCloseSideDrawer = () => {
        setIsOpen(false);
    }

    const handleOpenSideDrawer = () => {
        setIsOpen(true);
    }

    return (
        <div className="ml-3 lg:hidden cursor-pointer">
            <GiHamburgerMenu className='text-gray-700 text-xl' onClick={handleOpenSideDrawer}/>
            <Drawer title="Navegação" placement="left" open={isOpen} onClose={handleCloseSideDrawer} className="font-serif">
                <div>
                    <Sidebar sidebar={true} />
                </div>
            </Drawer>
        </div>
    )
}