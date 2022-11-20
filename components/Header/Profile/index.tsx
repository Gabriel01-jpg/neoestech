import { Avatar } from "antd";

export function Profile(){
    return (
        <div className="flex items-center pl-4 xl:border-l-[1px] xl:border-solid xl:border-gray-400">
            <p className="mr-2 text-gray-600 hidden lg:block">Gabriel Lima</p>
            <Avatar style={{ backgroundColor: '#e16630', verticalAlign: 'middle' }} size="large" >
                GL
            </Avatar>
        </div>

    )
}