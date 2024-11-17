import NavBar from "./NavBar";
import {pin} from "../data/location"
import './History.css'

// function to calculate the distance between two points given latitude and longitude
function calculateProximity(location){
    const center = {
        latitude: 16.255168643233784,
        longitude: 80.32518364053286
    }
    const r = 6371; // radius of earth in KM
    const p = Math.PI / 180;
    const lat1 = center.latitude * p;
    const long1 = center.longitude * p;
    const lat2 = location.latitude * p;
    const long2 = location.longitude * p;

    const dlat = lat2 - lat1
    const dlong = long2 - long1

    const a = Math.sin(dlat/2) ** 2 + Math.cos(lat1) * Math.cos(lat2) *
                    Math.sin(dlong / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    return Math.round((r * c) * 1000);
}

export default function History(){
    pin.reverse()

    return (
        <>
            <NavBar/>
            <div className="table-container">
                <table>
                    <thead>
                        <tr className="theader">
                            <th>S.No.</th>
                            <th>Date & Time</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Maps</th>
                            <th>In Proximity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pin.map((day, index) => {
                            let inProximity = calculateProximity(day) < 5000
                            return (
                                <tr key={index} className={!inProximity && "outProximity"}>
                                    <td>{index+1}</td>
                                    <td>{day.date}</td>
                                    <td>{day.latitude}</td>
                                    <td>{day.longitude}</td>
                                    <td><a href={"https://www.google.com/maps/@"+day.latitude+","+
                                        day.longitude+",18z?entry=ttu"}>
                                        Google Maps
                                        </a>
                                    </td>
                                    <td>{inProximity?"Yes":"No"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}