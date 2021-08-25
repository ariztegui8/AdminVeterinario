import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';
import Proptypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });


    //Crear state de error de formulario
    const [error, actualizarError] = useState(false);


    //funcion que se ejecuta cuando el ususario escribe en el input
    const actualizarState = (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }


    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;


    //Cuando el ususario envia el formulario
    const submitCita = (e)=>{
        e.preventDefault();
        

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return;
        }


        //Eliminar el mensaje de error previo en validacion
        actualizarError(false);


        //Asiganar un ID
        cita.id = uuid();


        //Crear la Cita
        crearCita(cita);


        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }



    return (
        <>
            <h2 className="title-formulario">Crear Cita</h2>

            {error ? <p className="alert alert-danger alertForm">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label className="label-form">Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="input-mascota"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label className="label-form">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="input-dueño"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label className="label-form">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="input-fecha"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label className="label-form">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="input-hora"
                    onChange={actualizarState}
                    value={hora}
                />

                <label className="label-form">Sintomas</label>
                <textarea
                    className="input-sintomas"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="btn btn-warning input-button"
                >Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: Proptypes.func.isRequired
}

export default Formulario
