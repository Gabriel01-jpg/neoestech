import "leaflet/dist/leaflet.css";
import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { FaMapMarkerAlt  } from 'react-icons/fa'
import Head from 'next/head'

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

import { Content } from "../../components/Content"
import { Sidebar } from "../../components/Sidebar"
import { withSSRAuth } from "../../utils/WithSSRAuth"
import getInstalacoes, { IInstallations } from "../../services/getInstallations"
import { Header } from "../../components/Header";
import { SpinElement } from "../../components/Spin";


interface ITableData {
    nome: string;
    latitude: string;
    longitude: string;
    status: string;
}

export default function Mapa(){
    const [installations, setInstallations] = useState<IInstallations[] | null>(null);
    const [dataTable, setDataTable] = useState<ITableData[] |  undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [center, setCenter] = useState<number[] | null>(null);


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
        },
        {
            title: 'Latitude',
            dataIndex: 'latitude',
            key: 'latitude',
        },
        {
            title: 'Longitude',
            dataIndex: 'longitude',
            key: 'longitude',
        },
        {
            title: 'Ações',
            dataIndex: 'name',
            key: 'operation',
            fixed: 'right',
            render: (_, record) => <FaMapMarkerAlt onClick={() => setCenter([Number(record.latitude), Number(record.longitude)])}/>
        }
    ]

    const MapWithNoSSR = dynamic(() => import("../../components/Map/"), {
        ssr: false
    });

    useEffect(() => {
        requestInstalacoesAPI()
    }, [])
    useEffect(() => {
        const newDataTable = installations && installations.map((current, index) => {
            return {
                ...current,
                key: index,
                status: current.status_internet
            }
        })
        installations && setCenter([installations[0].latitude, installations[0].longitude])
        setDataTable(newDataTable);
    }, [installations])

    const requestInstalacoesAPI = async () => {
        try {
            const installations = await getInstalacoes();
            installations && setInstallations(installations)
        } catch(e){
            // TODO: Disparar erro
        }
        
    } 

    return (
        <>
            <Head>
                <title>Neo Estech - Mapa</title>
            </Head>
            <Content>
                <Header />
                <div className="flex w-full h-[calc(100vh-7.5rem)]">
                    <Sidebar />
                    <div className="flex flex-col bg-gray-50 max-h-full w-full rounded-lg my-6 relative">
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Instalações</h1>
                        {installations ? (
                            <>
                                <div className="mx-4 ">
                                    <Table pagination={{ pageSize: 4 }} columns={columns} dataSource={dataTable}/>
                                </div>
                                <div className="flex w-full h-1/2 absolute bottom-0 ">
                                    <MapWithNoSSR installations={installations} center={center} />
                                </div>                            
                            </>
                        ) : (
                            <SpinElement />
                        )}
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