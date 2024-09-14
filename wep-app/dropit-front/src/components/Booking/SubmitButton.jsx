import React from 'react';
import axios from 'axios';


const SubmitButton = ({ source, destination, distance, formData }) => {
    const handleSubmit = async () => {
      try {
        const response = await axios.post('URL_DE_TU_API', {
          source,
          destination,
          distance,
          ...formData
        });
        console.log('Pedido creado:', response.data);
      } catch (error) {
        console.error('Error al crear el pedido:', error);
      }
    };
  
    return (
      <button className='p-3 bg-cyan-900 w-full mt-5 text-white rounded-lg' onClick={handleSubmit}>
        Crear Pedido
      </button>
    );
  };
  
  export default SubmitButton;