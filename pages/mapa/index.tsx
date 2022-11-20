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
import { IInstallationsDTO, useInstallations } from "../../hooks/useInstallations";


export default function Mapa(){
    const { installations, center, setCenter } = useInstallations();
    const [screenHeight, setScreenHeight] = useState(0);


    const columns: ColumnsType<IInstallationsDTO> = [
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
            render: (_, record) => <FaMapMarkerAlt onClick={() => setCenter([Number(record.latitude), Number(record.longitude)])}/>
        }
    ]

    const MapWithNoSSR = dynamic(() => import("../../components/Map/"), {
        ssr: false
    });

    useEffect(() => {
        setScreenHeight(window.innerHeight);
    }, [])
    

    return (
        <>
            <Head>
                <title>Neo Estech - Mapa</title>
            </Head>
            <Content>
                <Header />
                <div className="flex w-full h-[calc(100vh-7.5rem)]">
                    <Sidebar />
                    <div className="flex flex-col bg-gray-50 max-h-full w-full rounded-lg relative lg:my-6">
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Instalações</h1>
                        {installations ? (
                            <>
                                <div className="mx-4 ">
                                    <Table pagination={{ pageSize: screenHeight > 897 ? 4 : screenHeight < 668 ? 1 : 2}} columns={columns} dataSource={installations}/>
                                </div>
                                <div className="flex w-full h-1/2 absolute bottom-0">
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