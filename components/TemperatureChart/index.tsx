import { useMonitoring } from "../../hooks/useMonitoring";
import { Chart } from "../Chart";
import { BiRefresh } from 'react-icons/bi'
import { SpinElement } from "../Spin";

interface Props {
    id: number
}

export function TemperaturaChart({ id } : Props){
    const { data, initialData, lastData, refetch, loading } = useMonitoring({ id })

    return (
        <>
            {data ? (
                <div className="flex lg:flex-row flex-col h-64 mt-[32px] mx-4 justify-between">
                    <div className="flex flex-col ml-4 mb-4">
                        <div className="hidden lg:flex flex-col mb-4">
                            <p className="font-bold text-sm">24 horas atrás</p>
                            <p className="font-bold text-orange-800 text-lg">{initialData?.temperature}</p>
                            <p className="font-medium text-[0.8rem] text-gray-400">
                                {initialData?.data}
                            </p>
                        </div>
                        <div className="flex-col">
                            <p className="font-bold text-sm" >Última temperatura</p>
                            <p className="font-bold text-orange-800  text-lg">{lastData?.temperature}</p>
                            <div className="flex items-center text-gray-400">
                                <p className="inline-block items-center font-medium text-[0.8rem]">
                                    {lastData?.data}
                                </p>
                                <span className="inline-block ml-[3px] mb-[2px] text-lg cursor-pointer">
                                    {loading ? (
                                        <SpinElement size="small" />
                                    ) : (
                                        <BiRefresh onClick={refetch} />
        
                                    )}
                                </span>
                            </div>
                        </div> 
                    </div>
                    <div className="lg:w-[720px] w-full min-h-full lg:mr-6">
                        <Chart data={data} />
                    </div>
                </div>
            ) : (
                <SpinElement size="large" />
            )}
        </>
        
        
    )
}