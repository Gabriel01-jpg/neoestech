import { useCallback, useEffect, useState } from "react";
import getMonitoring from "../services/getMonitoring";

interface useMonitoringProps {
    id: number;
}

export function useMonitoring({ id } : useMonitoringProps){
    const [data, setData] = useState<any>(null);
    const [initialData, setInitialData] = useState<any>(null);
    const [lastData, setLastData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const addMonitoring = useCallback(async () => {
        setLoading(true);
        const monitoring = await getMonitoring(id)
        const newData = monitoring && monitoring.map(current => {
            return {
                temperature: current.temperatura,
                name: new Date(current.data_hora).toLocaleString()
            }
        })
        setData(newData)
        setInitialData({
            data: newData && newData[0]?.name,
            temperature: newData && newData[0]?.temperature
        })
        setLastData({
            data: newData && newData[newData.length - 1]?.name,
            temperature: newData && newData[newData.length - 1]?.temperature
        })
        setLoading(false);
    }, [id])

    useEffect(() => {
        addMonitoring();
    }, [id])

    const refetch = () => {
        addMonitoring();
    }

    return { data, initialData, lastData, refetch, loading }
}