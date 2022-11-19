import { ReactNode } from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface Props {
    children?: ReactNode;
    color?: 'purple' | 'orange';
    isLoading?: boolean;
    action?: () => void;
}

const antIcon = <LoadingOutlined className="text-white group-hover:text-orange-800" spin />;

export function Button({ children, color = 'purple', isLoading, action }: Props){



    return (
        <button
            className="bg-orange-800 px-6 py-2 w-full
             text-white hover:bg-white hover:border-solid hover:border-[1px]
             hover:border-orange-800 rounded font-serif hover:text-orange-800
             group
             "
            onClick={action}
        >
            {isLoading && isLoading ? (
                <Spin indicator={antIcon}/>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    )
}