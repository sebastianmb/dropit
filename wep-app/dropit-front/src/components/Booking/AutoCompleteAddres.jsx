import React, { useEffect } from 'react'
import { useState } from 'react'

function AutoCompleteAddres() {

    const [source, setSource] = useState('');
    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList()
        }, 3000)
        return () => clearTimeout(delayDebounceFn)
    }, [source])

 
    const getAddressList = async () => {
        const res = await fetch('http://localhost:3001/api/mapbox-suggestions?q='+source,{
            headers:{
                "Content-Type":"application/json",
            }
        });

        const result=await res.json();
        setAddressList(result)
        // Muestra la información en la consola
        console.log('Direcciones obtenidas:', result);

    }

    return (
        <div className='mt-5'>
            <div className='relative'>
                <label className='text-gray-400'>Where From?</label>
                <input type="text"
                    className='bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
                 {addressList?.suggestions?
                <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
                    {addressList?.suggestions.map((item) =>
                        <h2 className='p-3 hover:bg-gray-100 cursor-pointer'
                        onClick={()=>{setSource(item.full_address);setAddressList([])}}
                        key={item.mapbox_id}>{item.full_address}</h2>
                    )}
                </div>:null}
            </div>
            <div className='mt-3'>
                <label className='text-gray-400'>Where To?</label>
                <input type="text"
                    className='bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'
                />
               
            </div>
        </div>
    )
}

export default AutoCompleteAddres
