import Head from "next/head"
import { useEffect } from "react"
import { Chart } from "../../components/Chart"
import { Content } from "../../components/Content"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { useMonitoring } from "../../hooks/useMonitoring"
import getMonitoring from "../../services/getMonitoring"
import { withSSRAuth } from "../../utils/WithSSRAuth"

export default function Grafico(){

    const { data } = useMonitoring()
    console.log(data);

    return (
        <>
            <Head>
                <title>Neo Estech - Gráfico</title>
            </Head>
            <Content>
                <Header />
                <div className="flex w-full h-[calc(100vh-7.5rem)]">
                    <Sidebar />
                    <div className="flex flex-col bg-white max-h-full w-full rounded-2xl my-6 justify-between">
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Gráficos</h1>
                        <Chart data={data} />
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