import { Avatar, Dropdown, MenuProps } from "antd";
import { useContext } from "react";
import { AuthContext, SignOut } from "../../../context/AuthProvider";
import { IoMdExit } from 'react-icons/io'
const items: MenuProps['items'] = [
    {
      label: <span onClick={() => {
        SignOut()
        window.location.reload();
      }}>
        Sair
      </span>,
      key: '0',
    }
  ];

export function Profile(){
    const { user } = useContext(AuthContext)

    return (
        <div className="flex items-center pl-4 xl:border-l-[1px] xl:border-solid xl:border-gray-400">
            <p className="mr-2 text-gray-600 hidden lg:block">{user?.nome}</p>
            <Dropdown menu={{ items }} trigger={['click']}>
                <Avatar style={{ backgroundColor: '#e16630', verticalAlign: 'middle' }} size="large" >
                    {user?.nome ? user?.nome[0] : 'P'}
                </Avatar>
            </Dropdown>
                
            
        </div>

    )
}