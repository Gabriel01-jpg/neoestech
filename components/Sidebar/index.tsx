import { BsGraphUp, BsPinMap  } from 'react-icons/bs'
import { RiDashboardLine } from 'react-icons/ri'
import { Navitem } from './NavItem'

interface Props {
    sidebar?: boolean;
}

export function Sidebar({ sidebar } : Props){
    return (
        <nav className={`w-full max-w max-w-[190px] font-serif xl:block ${sidebar ? 'block' : 'hidden xl:block mx-8 my-12 '}`}>
            <p className="font-bold text-lg">Painel</p>
            <ul className="w-full flex flex-col gap-5 pl-2 mt-5 justify-top">
                <Navitem routePath='/mapa' ><BsPinMap />Mapa</Navitem>
                <Navitem routePath='/grafico'><BsGraphUp /> Gráfico</Navitem>
                <Navitem routePath='/combustiveis' ><RiDashboardLine /> Combustíveis</Navitem>
            </ul>
            {/* <p className="font-bold text-lg">Configurações</p>
            <ul className=" w-full flex flex-col gap-5 pl-2 mt-5 justify-top">
                <Navitem routePath='/mapa' ><BsPinMap />Mapa</Navitem>
                <Navitem routePath='/grafico'><BsGraphUp /> Gráfico</Navitem>
                <Navitem routePath='/combustiveis' ><RiDashboardLine /> Combustíveis</Navitem>
            </ul> */}
        </nav>
    )
}