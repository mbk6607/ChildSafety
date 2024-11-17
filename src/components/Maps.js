import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import React from "react";


const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
}

export default function Maps(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_TOKEN
    });
    const position = {
        lat: 16.255168643233784,
        lng: 80.32518364053286
    };
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, [])

    if (loadError) return  "Error";
    if (!isLoaded) return "Map Loading";

    return (
        <div id="mapContainer" style={containerStyle}>
            <GoogleMap
                mapContainerStyle={{
                    width: "1500px",
                    height: "700px",
                    border: "3px solid",
                    borderColor: "#F1DB4B",
                    borderRadius: "10px"
                }}
                center={position}
                zoom={16}
                onLoad={onMapLoad}
            >
                <MarkerF position={position} icon="https://maps.google.com/mapfiles/ms/icons/green-dot.png" />
            </GoogleMap>
        </div>
    )
}