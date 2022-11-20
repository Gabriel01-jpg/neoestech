import { useCallback, useEffect, useState } from "react";
import getMonitoring from "../services/getMonitoring";

export function useMonitoring(){
    const [data, setData] = useState<any>(null);

    const addMonitoring = useCallback(async () => {
        const monitoring = await getMonitoring()
        console.log(monitoring);
        const newData = monitoring && monitoring.map(current => {
            return {
                pv: current.temperatura,
                name: new Date(current.data_hora).toLocaleString()
            }
        })
        console.log(newData);
        setData(newData)
    }, [])

    useEffect(() => {
        addMonitoring();
    }, [])

    return { data }
}