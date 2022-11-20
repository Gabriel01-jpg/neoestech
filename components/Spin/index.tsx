import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined className="text-gray-600 mt-6" spin />;

export function SpinElement(){
    return (
        <Spin size="large" indicator={antIcon}/>
    )
}