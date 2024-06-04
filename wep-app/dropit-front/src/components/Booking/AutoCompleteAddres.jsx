import React, { useEffect } from 'react'
import { useState } from 'react'

function AutoCompleteAddres() {

    const [source, setSource] = useState()
    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList()
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [source])

    // URL de la API de Mapbox Search Box
    const apiUrl = 'https://api.mapbox.com/search/searchbox/suggest';
    const accessToken = 'pk.eyJ1IjoiY3Zhczg4IiwiYSI6ImNsd3dib2t0NTExNmIyam9sengyeWdwcncifQ.fS0NzZmL-920aprwyKoKmA'; // Reemplaza con tu propio token de acceso de Mapbox
    // Construye la URL completa
    const fullUrl = `${apiUrl}?q=${source}&access_token=${accessToken}`;
    const getAddressList = async () => {
        const res = await fetch(fullUrl, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await res.json();
        setAddressList(result)

    }
    return (
        <div className='mt-5'>
            <div>
                <label className='text-gray-400'>Where From?</label>
                <input type="text"
                    className='bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
            </div>
            <div className='mt-3'>
                <label className='text-gray-400'>Where To?</label>
                <input type="text"
                    className='bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'
                />
                {addressList?.suggestions?
                <div>
                    {addressList?.suggestions.map((item, index) =>
                        <h2>{item.full_address}</h2>
                    )}
                </div>:null}
            </div>
        </div>
    )
}

export default AutoCompleteAddres
