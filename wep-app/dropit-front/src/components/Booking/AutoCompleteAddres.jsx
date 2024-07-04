import React, { useEffect } from 'react'
import { useState } from 'react'
import locationIcon from '../../assets/images/location.png'; // Ruta al archivo SVG del icono de ubicación
import destinationIcon from '../../assets/images/destination.png'; // Ruta al archivo SVG del icono de destino
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function AutoCompleteAddres() {

    const [value, setValue] = useState(null);
    
    const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_APIKEY;


    

    return (
        <div className='mt-5'>
            <div className='relative'>
                <label className='text-gray-400'>Where From?</label>
                <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                    <img src={locationIcon} alt="Ubicación" className="h-4 w-4" />

                    {/*<input type="text"
                        className='bg-transparent w-full outline-none'
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />*/}
                    <GooglePlacesAutocomplete
                        apiKey={googleApiKey}
                        selectProps={{
                            value,
                            onChange: setValue,
                            placeholder:'Pickup Location',
                            isClearable:true,
                            className:'w-full',
                            components:{
                                DropdownIndicator:false
                            },
                            styles:{
                                control:(provide)=>({
                                    ...provide,
                                    backgroundColor:'white',
                                    border:'none'
                                })
                            }
                          }}
                    />
                </div>
                {/*addressList?.suggestions ?
                    <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
                        {addressList?.suggestions.map((item) =>
                            <h2 className='p-3 hover:bg-gray-100 cursor-pointer'
                                onClick={() => { setSource(item.full_address); setAddressList([]) }}
                                key={item.mapbox_id}>{item.full_address}</h2>
                        )}
                    </div> : null*/}
            </div>
            <div className='mt-3'>
                <label className='text-gray-400'>Where To?</label>
                <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                    <img src={destinationIcon} alt="Destino" className="h-4 w-4" />
                    <input type="text"
                        className='bg-transparent w-full outline-none'
                    />
                </div>

            </div>
        </div>
    )
}

export default AutoCompleteAddres
