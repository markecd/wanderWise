import { React, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import polyline from '@mapbox/polyline';
import { apiUrl } from '../config';



import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ locationData }) => {
    const [route, setRoute] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoute = async () => {
            try {
                if (!locationData) {
                    return;
                }
                const startString = locationData.start.latitude.toString() + ',' + locationData.start.longitude.toString();
                const endString = locationData.end.latitude.toString() + ',' + locationData.end.longitude.toString();
                const response = await fetch(`${apiUrl}/nacrt/mapData?start=${startString}&end=${endString}&intermediate=${locationData.intermediate}`, {
					credentials: 'include'
				});
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (data.routes.length > 0) {
                    const routePolyline = data.routes[0].overview_polyline.points;
                    const routeCoords = polyline.decode(routePolyline).map(point => [point[0], point[1]]);
                    setRoute(routeCoords);
                }
            } catch (error) {
                console.error('Error fetching the route:', error);
                setError(error.message);
            }
        }

        fetchRoute();
    }, [locationData]);

    if (!locationData) {
        return <div>Loading...</div>;
    }

    const midpoint = {
        latitude: (locationData.start.latitude + locationData.end.latitude) / 2,
        longitude: (locationData.start.longitude + locationData.end.longitude) / 2
    };

    return (
        <MapContainer center={[midpoint.latitude, midpoint.longitude]} zoom={10} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[locationData.start.latitude, locationData.start.longitude]}>
                <Popup>Start Point</Popup>
            </Marker>
            <Marker position={[locationData.end.latitude, locationData.end.longitude]}>
                <Popup>End Point</Popup>
            </Marker>
            {route.length > 0 && <Polyline positions={route} color="blue" />}
            {error && <div>Error: {error}</div>}
        </MapContainer>
    );
}

export default Map;
