import { Header } from "./Header"
import { Map } from "./Map"
import {Booking} from "./Booking/Booking"
import imageDesktop from '../assets/images/image-web-3-desktop-.jpg'


export const RideBookingPanel = ({ }) => {
    return (
        <main className="px-2  font-Inter  " >
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="">
                    <Booking/>
                </div>
                <div className="col-span-2 bg-red-100 ">
                    GoogleMap
                </div>
            </div>
            
        </main>
    )
}