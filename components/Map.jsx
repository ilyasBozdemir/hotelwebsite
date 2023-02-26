import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
    ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
    ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
    ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
    ssr: false,
});
function Map({zoom=14}) {
    const [positions, setPositions] = React.useState([
        [36.680261, 32.807540],// Latitude and Longitude values
    ]);
    const [map, setMap] = React.useState(null);
    React.useEffect(() => {
        if (!map) {
            setMap(
                <MapContainer
                    center={positions[0]}
                    zoom={zoom}
                    style={{ height: '100%', width: '100%' }}
                    whenCreated={setMap}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {positions.map((position, index) => (
                        <Marker key={index} position={position}>
                            <Popup >Güven Otel</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            );
        }
    }, []);
    return <>{map}</>;
}

const DynamicMap = dynamic(() => Promise.all([import('leaflet-defaulticon-compatibility')])
    .then(() => Map), {
    ssr: false,
});

export default DynamicMap;
