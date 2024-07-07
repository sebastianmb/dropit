import { Header } from "./Header"
import { Map } from "./Map"
import {Booking} from "./Booking/Booking"
import imageDesktop from '../assets/images/image-web-3-desktop-.jpg'
import { SourceContext } from "../context/SourceContext.js"
import { useState } from "react"
import { DestinationContext } from "../context/DestinationContext.js"
import GoogleMapSection from "./GoogleMapSection.jsx"


export const RideBookingPanel = ({ }) => {
    const [source, setSource]=useState([]);
    const [destination, setDestination]=useState([]);
    return (
        <SourceContext.Provider value={{source,setSource}}>
            <DestinationContext.Provider value={{destination,setDestination}}>
        <main className="px-2  font-Inter  " >
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="">
                    <Booking/>
                </div>
                <div className="col-span-2 bg-white ">
                    <GoogleMapSection/>
                </div>
            </div>
            
        </main>
        </DestinationContext.Provider>
        </SourceContext.Provider>
    )
}