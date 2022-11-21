import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined className="text-gray-600 mt-6" spin />;

interface Props {
    size?: 'large' | 'small';
}

export function SpinElement({ size = 'large' }: Props){
    return (
        <Spin size={size} indicator={antIcon}/>
    )
}