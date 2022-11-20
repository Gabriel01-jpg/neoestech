import { Avatar } from "antd";

export function Profile(){
    return (
        <div className="flex items-center pl-4 border-l-[1px] border-solid border-gray-400">
            <p className="mr-2 text-gray-600">Gabriel Lima</p>
            <Avatar style={{ backgroundColor: '#e16630', verticalAlign: 'middle' }} size="large" >
                GL
            </Avatar>
        </div>

    )
}