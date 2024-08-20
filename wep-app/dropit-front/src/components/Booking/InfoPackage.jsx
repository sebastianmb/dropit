import React, { useState } from 'react'

function InfoPackage() {

    const [mensaje, setMensaje] = useState("");
    const [tamaño, setTamaño] = useState("");
    const [peso, setPeso] = useState("");

    const handleChange = (event) => {
        // Lógica para manejar el cambio en el textarea
        // Actualiza el estado o realiza otras acciones necesarias
    };
    return (
        <div>
            <div className='p-5'>
                <h2 className=' text-[16px] font-semibold italic'>Información del paquete</h2>

                <div className='relative'>
                    <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                        <textarea className='w-full'
                            name="mensaje"
                            value={mensaje}
                            onChange={handleChange}
                        />
                    </div>
                    <select name="tamaño" value={tamaño} onChange={handleChange}>
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>

                    <input
                        type="number"
                        name="peso"
                        value={peso}
                        onChange={handleChange}
                    />

                </div>

            </div>
        </div>
    )
}

export default InfoPackage
