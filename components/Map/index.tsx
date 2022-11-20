import { useEffect, useState } from "react"
import { IInstallations } from "../../services/getInstallations";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


interface Props {
    installations: IInstallations[]
    center: number[] | null
}

function Map({ installations, center }: Props){
    const [inBrowser, setInBrowser] = useState(false);

    useEffect(() => {
        setInBrowser(true);
    }, [])

    if (!inBrowser) {
        return null;
    }

    return (
        <MapContainer center={center} zoom={15} style={{ height: "100%", width: "100%" }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {installations.map(installation => (
                <Marker title={installation.status_internet} position={[installation.latitude, installation.longitude]}>
                    <Popup >
                        {installation.nome} <br />
                        {installation.status_internet} <br />
                        Lat: {installation.latitude} <br />
                        Long: {installation.longitude}
                    </Popup>
                </Marker>
            ))}

        </MapContainer>
    )
}

export default Map;