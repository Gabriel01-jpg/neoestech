import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Head from "next/head"
import { useState } from "react"
import { Content } from "../../components/Content"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { IPrices } from "../../services/getPrices"

import { withSSRAuth } from "../../utils/WithSSRAuth"

interface ITableData {
    title: string;
    dataIndex: string;
    key: string;
}

const columns: ColumnsType<ITableData> = [
    {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        responsive: ['sm'],
    },
    {
        title: 'Latitude',
        dataIndex: 'latitude',
        key: 'latitude',
        responsive: ['lg'],
    },
    {
        title: 'Longitude',
        dataIndex: 'longitude',
        key: 'longitude',
        responsive: ['lg'],
    },
    {
        title: 'Ações',
        dataIndex: 'name',
        key: 'operation',
        fixed: 'right',
    }
]

export default function Combustiveis(){

    const [combustiveis, setCombustiveis] = useState<IPrices | null>(null);

    return (
        <>
            <Head>
                <title>Neo Estech - Combustiveis</title>
            </Head>
            <Content>
                <Header />
                <div className="flex w-full h-[calc(100vh-7.5rem)]">
                    <Sidebar />
                    <div className="flex flex-col bg-white max-h-full w-full rounded-2xl lg:my-6">
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Combustiveis</h1>
                        <Table pagination={{ pageSize: 4 }} columns={columns} dataSource={combustiveis}/>
                    </div>
                </div>
            </Content >
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    
    return {
        props: {

        }
    }
})