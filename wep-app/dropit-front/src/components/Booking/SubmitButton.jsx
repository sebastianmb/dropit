
import React, { useContext } from 'react';
import { InfoPackageContext } from '../../context/InfoPackageContext'; 
import {SourceContext} from '../../context/SourceContext';
import {DestinationContext} from '../../context/DestinationContext';
import { WaypointContext } from '../../context/WaypointsContext';
import dayjs from 'dayjs';
import { useUser } from "@clerk/clerk-react";


const SubmitButton = ({date, formData}) => {

  const { mensaje, tamaño, peso, valor } = useContext(InfoPackageContext);
  const { isSignedIn, user, isLoaded } = useUser()
  const { source } = useContext(SourceContext);
  const { destination} = useContext(DestinationContext);
  const { waypoint} = useContext(WaypointContext);
  

  const handleSubmit = async () => {
    const formattedDate = date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : 'null';
    console.log('Fecha: ', formattedDate);
    console.log('Mensaje:', mensaje);
    console.log('Tamaño:', tamaño);
    console.log('Peso:', peso);
    console.log('Valor:', valor);
    console.log('Origen', source);
    console.log('Destino', destination);
    console.log('Waypoints', waypoint);
    console.log('Formulario: ', formData);
    console.log('Usuario:', user.id);
  }
  
    /*const handleSubmit = async () => {
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
    };*/
  
    return (
      <button className='p-3 bg-cyan-900 w-full mt-5 text-white rounded-lg' onClick={handleSubmit}>
        Crear Pedido
      </button>
    );
  };
  
  export default SubmitButton;