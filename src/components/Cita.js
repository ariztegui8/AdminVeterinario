import React from 'react';
import Proptypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return (
        <div className="container-cita">
            <p><b>Mascota:</b> <span>{cita.mascota}</span></p>
            <p><b>Dueño:</b> <span>{cita.propietario}</span></p>
            <p><b>Fecha:</b> <span>{cita.fecha}</span></p>
            <p><b>Hora:</b> <span>{cita.hora}</span></p>
            <p><b>Sintomas:</b> <span>{cita.sintomas}</span></p>
            
            <button
                className="btn btn-danger"
                onClick={()=> eliminarCita(cita.id)}
            >Eliminar
            </button>
        </div>
    )
}

Cita.propTypes = {
    cita: Proptypes.object.isRequired,
    eliminarCita: Proptypes.func.isRequired
}

export default Cita
