import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import locationIcon from '../../assets/images/location.png'; // Ruta al archivo SVG del icono de ubicación
import destinationIcon from '../../assets/images/destination.png'; // Ruta al archivo SVG del icono de destino
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../../context/SourceContext.js';
import { DestinationContext } from '../../context/DestinationContext.js';

function AutoCompleteAddres() {


    const [valueSource, setValueSource] = useState(null);
    const [valueDestination, setValueDestination] = useState(null);
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);

    


    const getLatAndLng = (place) => {

        const placeId = place.value.place_id;
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId }, (place, status) => {
            if (status === 'OK' && place.geometry && place.geometry.location) {
                console.log(place.geometry.location.lng());
                const newSource = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    name: place.formatted_address,
                    label: place.name
                };
                const newDestination={
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    name: place.formatted_address,
                    label: place.name
                };
                setSource(newSource)
                setDestination(newDestination)
                // Ahora puedes acceder a source y destination aquí
                console.log('Nuevo source:', newSource);
            }
        })

    }




    return (
        <div className='mt-5'>
            <div className='relative'>
                <label className='text-gray-400'>Where From?</label>
                <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                    <img src={locationIcon} alt="Ubicación" className="h-4 w-4" />

                    <GooglePlacesAutocomplete
                        
                        selectProps={{
                            valueSource,
                            onChange: (place) => {
                                getLatAndLng(place);
                                setValueSource(place)
                            },
                            placeholder: 'Pickup Location',
                            isClearable: true,
                            className: 'w-full',
                            components: {
                                DropdownIndicator: false
                            },
                            styles: {
                                control: (provide) => ({
                                    ...provide,
                                    backgroundColor: 'white',
                                    border: 'none'
                                })
                            }
                        }}
                    />
                </div>

            </div>
            <div className='mt-3'>
                <label className='text-gray-400'>Where To?</label>
                <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                    <img src={destinationIcon} alt="Destino" className="h-4 w-4" />
                    <GooglePlacesAutocomplete
                        
                        selectProps={{
                            valueDestination,
                            onChange: (place) => {
                                getLatAndLng(place);
                                setValueDestination(place)
                            },
                            placeholder: 'Pickup Location',
                            isClearable: true,
                            className: 'w-full',
                            components: {
                                DropdownIndicator: false
                            },
                            styles: {
                                control: (provide) => ({
                                    ...provide,
                                    backgroundColor: 'white',
                                    border: 'none'
                                })
                            }
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default AutoCompleteAddres
