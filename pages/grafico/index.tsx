import Head from "next/head"
import { useEffect } from "react"
import { Chart } from "../../components/Chart"
import { Content } from "../../components/Content"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { TemperaturaChart } from "../../components/TemperatureChart"
import { useMonitoring } from "../../hooks/useMonitoring"
import getMonitoring from "../../services/getMonitoring"
import { withSSRAuth } from "../../utils/WithSSRAuth"

const charts = [
    {
        name: 'Avenida',
        id: 3595
    },
    {
        name: 'Delta',
        id: 20210
    }
]

export default function Grafico(){
    return (
        <>
            <Head>
                <title>Neo Estech - Gráfico</title>
            </Head>
            <Content>
                <Header />
                <div className="flex w-full h-[calc(100vh-7.5rem)]">
                    <Sidebar />
                    <div className="flex flex-col bg-white max-h-full w-full rounded-2xl lg:mt-6 overflow-x-scroll">
                        <h1 className="font-medium text-gray-600 text-2xl mt-6 ml-4">Gráficos</h1>
                        <div className="h-full flex flex-col justify-around mb-8">
                            {charts.map(chart => (
                                <TemperaturaChart key={chart.id} id={chart.id} />
                            ))}
                        </div>
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