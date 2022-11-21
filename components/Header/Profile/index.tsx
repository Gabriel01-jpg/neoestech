import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";



export function Profile(){
    const { user } = useContext(AuthContext)

    return (
        <div className="flex items-center pl-4 xl:border-l-[1px] xl:border-solid xl:border-gray-400">
            <p className="mr-2 text-gray-600 hidden lg:block">{user?.nome}</p>
                <Avatar style={{ backgroundColor: '#e16630', verticalAlign: 'middle' }} size="large" >
                    {user?.nome[0]}
                </Avatar>
            
        </div>

    )
}