import { Header } from "./Header"
import { Map } from "./Map"
import {Booking} from "./Booking/Booking"
import imageDesktop from '../assets/images/image-web-3-desktop-.jpg'


export const RideBookingPanel = ({ }) => {
    return (
        <main className="px-2 pt-6 pb-3 font-Inter  lg:pt-6" >
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-blue-100">
                    <Booking/>
                </div>
                <div className="col-span-2 bg-red-100 ">
                    Map
                </div>
            </div>
            
        </main>
    )
}