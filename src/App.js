import { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";


function App() {

    //Citas en localStorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
        citasIniciales = [];
    }


    const [citas, guardarCitas] = useState(citasIniciales);


    //UseEffect para realizar ciertas operaciones cuando el state cambie
    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        
      if(citasIniciales){
          localStorage.setItem('citas', JSON.stringify(citas))
      }else{
          localStorage.setItem('citas', JSON.stringify([]));
      }
    }, [citas]);


    //Funcion que tome las citas actuales y agregue la nueva
    const crearCita = cita =>{
        guardarCitas([...citas,cita]);
    }


    //Funcion que elimina una cita por su id
    const eliminarCita = id =>{
        const nuevaCita = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevaCita);
    }

    
    //Mensaje condicional
    const titulo = citas.length === 0 ? 'No hay Citas' : 'Mis Citas';


  return (
      <>
        <h1 className="title">Administrador Veterinario</h1>

        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <Formulario
                        crearCita={crearCita}
                    />
                </div>

                <div className="col-sm-6">
                    <h2 className="title-admCitas">{titulo}</h2>

                    {citas.map(cita => (
                        <Cita 
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
  
      </>

   
  );
}

export default App;
