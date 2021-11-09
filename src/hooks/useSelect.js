import React, { useState } from 'react'


const useSelect = (stateInicial, opciones) => {

    // State del custom Hook
    const[state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {/* pasando las opciones al state */}
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}


        </select>
    );

    return [state, SelectNoticias];

    
}
 
export default useSelect;